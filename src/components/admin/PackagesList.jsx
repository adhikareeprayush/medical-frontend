import { useState, useEffect } from 'react';
import { getAllPackages } from '../../utils/api';
const PackagesList = () => {
  const [isEditingPackage, setIsEditingPackage] = useState(false);
  const [packages, setPackages] = useState([]);
  const fetchPackages = async () => {
    try {
      const response = await getAllPackages();
      console.log('Fetched packages:', response.data.data);
      setPackages(response.data.data);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <div className="mt-6 flex flex-col">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-semibold">Package Details</h2>
        <button
          className="btn btn-secondary"
          onClick={() => setIsEditingPackage(!isEditingPackage)}
        >
          {isEditingPackage ? 'Cancel' : 'Edit'}
        </button>
      </div>
      <div className="mt-4">
        {packages.map((pkg) => (
          <div key={pkg.id} className="border-b py-2">
            <h3 className="text-lg font-semibold">{pkg.checks}</h3>
            <p>{pkg.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesList;
