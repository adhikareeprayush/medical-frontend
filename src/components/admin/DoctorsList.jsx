const DoctorsList = ({ doctors, onEdit, onDelete }) => {
  return (
    <table className="w-full table-auto border border-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2">Image</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Qualification</th>
          <th className="px-4 py-2">Specialty</th>
          <th className="px-4 py-2">Department</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {doctors.map((doctor) => (
          <tr key={doctor.id} className="border-t border-gray-200 text-center">
            <td className="px-4 py-2">
              <img
                src={doctor.image_url}
                alt={doctor.fullName}
                className="mx-auto h-12 w-12 rounded-full object-cover"
              />
            </td>
            <td className="px-4 py-2 font-medium">{doctor.fullName}</td>
            <td className="px-4 py-2">{doctor.qualification}</td>
            <td className="px-4 py-2">{doctor.specialityName}</td>
            <td className="px-4 py-2">{doctor.departmentName}</td>
            <td className="space-x-2 px-4 py-2">
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => onEdit(doctor)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDelete(doctor.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DoctorsList;
