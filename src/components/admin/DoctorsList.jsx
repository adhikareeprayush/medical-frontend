import { getTransformedImageUrl } from '../../utils/getTransformedImageUrl';
import { ProgressiveImage } from '../../utils/ProgressiveImage';

const DoctorsList = ({ doctors, onEdit, onDelete }) => {
  return (
    <table className="w-full table-auto border border-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2">Rank</th>
          <th className="px-4 py-2">Image</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Qualification</th>
          <th className="px-4 py-2">Specialty</th>
          <th className="px-4 py-2">Department</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {doctors?.map((doctor) => (
          <tr key={doctor.id} className="border-t border-gray-200 text-center">
            <td className="px-4 py-2 font-medium">{doctor.display_order}</td>
            <td className="px-4 py-2">
              <ProgressiveImage
                lowQualitySrc={getTransformedImageUrl(doctor.image_url, 40, 40)}
                highQualitySrc={getTransformedImageUrl(
                  doctor.image_url,
                  1080,
                  720,
                )}
                alt={doctor.fullName}
                className="mx-auto h-12 w-12 rounded-full object-cover"
              />
            </td>
            <td className="px-4 py-2 font-medium">{doctor.fullName}</td>
            <td className="px-4 py-2">{doctor.qualification}</td>
            <td className="px-4 py-2">{doctor.specialityName}</td>
            <td className="px-4 py-2">{doctor.departmentName}</td>
            <td className="space-x-2 px-4 py-2">
              <button className="text-secondary" onClick={() => onEdit(doctor)}>
                Edit
              </button>
              <button
                className="text-red-500"
                onClick={() => {
                  if (
                    window.confirm(
                      'Are you sure you want to delete this doctor?',
                    )
                  ) {
                    onDelete(doctor.id);
                  }
                }}
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
