import React, { useEffect, useState } from 'react';
import { getAllInquiries, deleteInquiry } from '../../utils/api';

const InquiriesList = () => {
  const [inquiries, setInquiries] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchInquiries = async () => {
    try {
      const response = await getAllInquiries();
      setInquiries(response.data.data);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this inquiry?')) {
      try {
        setIsDeleting(true);
        await deleteInquiry(id);
        fetchInquiries();
      } catch (error) {
        console.error('Error deleting inquiry:', error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  return (
    <div className="mt-6">
      <h2 className="mb-4 text-2xl font-semibold">Inquiries</h2>
      <div className="overflow-x-auto rounded border border-gray-300">
        <table className="min-w-full table-auto divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Email
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Subject
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Message
              </th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {inquiries.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-4 py-6 text-center text-gray-500">
                  No inquiries found.
                </td>
              </tr>
            ) : (
              inquiries.map(({ id, name, email, subject, message }) => (
                <tr key={id}>
                  <td className="px-4 py-2 text-sm whitespace-nowrap text-gray-700">
                    {name}
                  </td>
                  <td className="px-4 py-2 text-sm whitespace-nowrap text-gray-700">
                    {email}
                  </td>
                  <td className="px-4 py-2 text-sm whitespace-nowrap text-gray-700">
                    {subject}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">{message}</td>
                  <td className="px-4 py-2 text-center text-sm whitespace-nowrap">
                    <button
                      onClick={() => handleDelete(id)}
                      disabled={isDeleting}
                      className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700 disabled:bg-red-400"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InquiriesList;
