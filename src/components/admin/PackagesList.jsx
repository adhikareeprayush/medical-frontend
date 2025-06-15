import { useState, useEffect } from 'react';
import {
  fetchAllPackages,
  addPackage,
  removePackage,
} from '../../utils/packages';

const PackagesList = () => {
  const [packages, setPackages] = useState([]);
  const [isEditingPackage, setIsEditingPackage] = useState(false);
  const [checksList, setChecksList] = useState([]);
  const [newCheck, setNewCheck] = useState('');
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

  const handleAddPackage = async () => {
    const payload = {
      ...newPackage,
      checks: checksList.join(', '),
    };

    try {
      await addPackage(payload);
      setNewPackage({
        title: '',
        price: '',
        discounted_price: '',
        status: 'active',
        whatsappUrl: '',
      });
      setChecksList([]);
      setNewCheck('');
      await fetchPackages();
    } catch (error) {
      console.error('Error adding package:', error);
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

  return (
    <div className="mt-6 flex flex-col">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-semibold">Package Details</h2>
        <button
          className="btn btn-secondary"
          onClick={() => setIsEditingPackage(!isEditingPackage)}
        >
          {isEditingPackage ? 'Cancel' : 'Add Package'}
        </button>
      </div>

      {isEditingPackage && (
        <div className="mt-4 space-y-2 rounded border p-4 shadow">
          <input
            name="title"
            placeholder="Title"
            value={newPackage.title}
            onChange={handleChange}
            className="input input-bordered w-full"
          />

          {/* Checks Input as list */}
          <div className="flex gap-2">
            <input
              name="check"
              placeholder="Add a check (e.g., Blood Test)"
              value={newCheck}
              onChange={(e) => setNewCheck(e.target.value)}
              className="input input-bordered flex-1"
            />
            <button className="btn btn-sm btn-primary" onClick={handleAddCheck}>
              Add
            </button>
          </div>

          {/* Display added checks */}
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
          <button className="btn btn-primary mt-2" onClick={handleAddPackage}>
            Submit
          </button>
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
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(pkg.id)}
              >
                Delete
              </button>
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
