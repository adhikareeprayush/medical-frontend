import { useState } from 'react';
import DepartmentsList from './DepartmentsList';

const Departments = () => {
  const [isEditingDepartments, setIsEditingDepartments] = useState(false);
  return (
    <div>
      <div className="mt-6 flex flex-col">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-2xl font-semibold">Your Departments</h2>
          <button
            className="btn btn-secondary"
            onClick={() => setIsEditingDepartments(!isEditingDepartments)}
          >
            {isEditingDepartments ? 'Cancel' : 'Edit'}
          </button>
        </div>
        <div className="mt-4">
          {isEditingDepartments ? (
            <>Edit your Departments here</>
          ) : (
            <DepartmentsList Departments={Departments} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Departments;
