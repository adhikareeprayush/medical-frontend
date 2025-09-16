import {
  getAllDepartments,
  addDepartment,
  deleteDepartment,
  updateDepartmentById,
} from '../../utils/api';
import { useState, useEffect } from 'react';

import DepartmentFormModal from '../../components/admin/DepartmentFormModal';
import DepartmentsList from '../../components/admin/DepartmentsList';
import { toast } from 'react-toastify';

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [isEditingDepartments, setIsEditingDepartments] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchDepartments = async () => {
    try {
      const response = await getAllDepartments();
      setDepartments(response.data.data);
      console.log('Fetched departments:', response.data.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDepartment(id);
      setDepartments((prev) => prev.filter((dept) => dept.id !== id));
      toast.success('Department deleted successfully');
    } catch (error) {
      console.error('Error deleting department:', error);
      toast.error('Failed to delete department');
    }
  };

  const handleEdit = (department) => {
    setSelectedDepartment(department);
    setShowModal(true);
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (formData.id) {
        await updateDepartmentById(formData.id, formData);
      } else {
        await addDepartment(formData);
      }
      setShowModal(false);
      fetchDepartments();
    } catch (error) {
      console.error('Error saving department:', error);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  return (
    <div>
      <div className="mt-6 flex flex-col">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-2xl font-semibold">Your Departments</h2>
          <div className="flex space-x-2">
            <button
              className="btn btn-secondary"
              onClick={() => setIsEditingDepartments((prev) => !prev)}
            >
              {isEditingDepartments ? 'Cancel Edit' : 'Edit'}
            </button>
            {isEditingDepartments && (
              <button
                className="btn btn-primary"
                onClick={() => {
                  setSelectedDepartment(null);
                  setShowModal(true);
                }}
              >
                + Add Department
              </button>
            )}
          </div>
        </div>
        <div className="mt-4">
          <DepartmentsList
            departments={departments}
            isEditing={isEditingDepartments}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>

      {showModal && (
        <DepartmentFormModal
          department={selectedDepartment}
          onClose={() => setShowModal(false)}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default Departments;
