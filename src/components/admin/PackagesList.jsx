import { useState, useEffect } from 'react';
import {
  fetchAllPackages,
  addPackage,
  removePackage,
  editPackage,
} from '../../utils/packages';

const PackagesList = () => {
  const [packages, setPackages] = useState([]);
  const [isEditingPackage, setIsEditingPackage] = useState(false);
  const [checksList, setChecksList] = useState([]);
  const [newCheck, setNewCheck] = useState('');
  const [editingId, setEditingId] = useState(null); // 👈 Track ID of package being edited
  const [newPackage, setNewPackage] = useState({
    title: '',
    price: '',
    discounted_price: '',
    status: 'active',
    whatsappUrl: '',
  });

  const fetchPackages = async () => {
    try {
      const data = await fetchAllPackages();
      setPackages(data.data);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPackage((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCheck = () => {
    if (newCheck.trim()) {
      setChecksList((prev) => [...prev, newCheck.trim()]);
      setNewCheck('');
    }
  };

  const handleRemoveCheck = (index) => {
    setChecksList((prev) => prev.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setNewPackage({
      title: '',
      price: '',
      discounted_price: '',
      status: 'active',
      whatsappUrl: '',
    });
    setChecksList([]);
    setNewCheck('');
    setEditingId(null);
    setIsEditingPackage(false);
  };

  const handleAddOrUpdatePackage = async () => {
    const payload = {
      ...newPackage,
      checks: checksList.join(', '),
    };

    try {
      if (editingId) {
        await editPackage(editingId, payload); // 👈 Editing
      } else {
        await addPackage(payload); // 👈 Adding
      }

      resetForm();
      await fetchPackages();
    } catch (error) {
      console.error('Error saving package:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await removePackage(id);
      setPackages((prev) => prev.filter((pkg) => pkg.id !== id));
    } catch (error) {
      console.error('Error deleting package:', error);
    }
  };

  const handleEdit = (pkg) => {
    setIsEditingPackage(true);
    setEditingId(pkg.id);
    setNewPackage({
      title: pkg.title,
      price: pkg.price,
      discounted_price: pkg.discounted_price,
      status: pkg.status,
      whatsappUrl: pkg.whatsappUrl,
    });
    setChecksList(pkg.checks?.split(',').map((c) => c.trim()) || []);
  };

  return (
    <div className="mt-6 flex flex-col">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-semibold">Package Details</h2>
        <button
          className="btn btn-secondary"
          onClick={() => {
            if (isEditingPackage) resetForm();
            else setIsEditingPackage(true);
          }}
        >
          {isEditingPackage ? 'Cancel' : 'Add Package'}
        </button>
      </div>

      {isEditingPackage && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="scrollbar-hide relative h-fit w-full max-w-xl overflow-y-scroll rounded-xl bg-white p-6 pb-3 shadow-lg">
            <button
              onClick={() => {
                setIsEditingPackage(false);
                setEditingId(null);
                resetForm();
              }}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h2 className="mb-4 text-xl font-bold">
              {editingId ? 'Edit Package' : 'Add New Package'}
            </h2>
            <div className="mt-4 space-y-2 rounded">
              <input
                name="title"
                placeholder="Title"
                value={newPackage.title}
                onChange={handleChange}
                className="input input-bordered w-full"
              />

              <div className="flex gap-2">
                <input
                  name="check"
                  placeholder="Add a check (e.g., Blood Test)"
                  value={newCheck}
                  onChange={(e) => setNewCheck(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddCheck();
                    }
                  }}
                  className="input input-bordered flex-1"
                />
                <button
                  className="btn btn-sm btn-primary"
                  onClick={handleAddCheck}
                >
                  Add
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {checksList.map((check, index) => (
                  <span
                    key={index}
                    className="badge badge-outline flex items-center gap-1"
                  >
                    {check}
                    <button
                      onClick={() => handleRemoveCheck(index)}
                      className="ml-1 text-red-500"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>

              <input
                name="price"
                placeholder="Price"
                value={newPackage.price}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
              <input
                name="discounted_price"
                placeholder="Discounted Price"
                value={newPackage.discounted_price}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
              <input
                name="whatsappUrl"
                placeholder="WhatsApp URL"
                value={newPackage.whatsappUrl}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
              <button
                className="btn btn-primary mt-2"
                onClick={handleAddOrUpdatePackage}
              >
                {editingId ? 'Update Package' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 space-y-4">
        {packages.map((pkg) => (
          <div key={pkg.id} className="rounded border p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{pkg.title}</h3>
                <p className="text-sm text-gray-600">{pkg.checks}</p>
                <p>
                  Price: <span className="line-through">{pkg.price}</span>{' '}
                  <span className="text-green-600">{pkg.discounted_price}</span>
                </p>
                <p className="text-sm text-gray-500">Status: {pkg.status}</p>
              </div>
              <div className="flex gap-2">
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => handleEdit(pkg)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(pkg.id)}
                >
                  Delete
                </button>
              </div>
            </div>
            <a
              href={pkg.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block w-fit rounded bg-green-500 px-2 py-1 text-white"
            >
              WhatsApp Link
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesList;
