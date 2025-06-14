const DoctorsList = ({ doctors }) => {
  return (
    <div>
      {doctors.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="flex flex-col items-center rounded-xl bg-white p-4 shadow-md transition-shadow hover:shadow-lg"
            >
              <img
                src={doctor.image_url || '/placeholder-doctor.jpg'}
                alt={doctor.fullName}
                className="mb-3 h-24 w-24 rounded-full object-cover"
              />
              <h3 className="text-lg font-semibold">{doctor.fullName}</h3>
              <p className="text-sm text-gray-500">{doctor.qualification}</p>
              <p className="text-sm text-gray-500">{doctor.specialityName}</p>
              <p className="text-sm text-gray-500">{doctor.departmentName}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-center text-gray-500">No doctors found</p>
      )}
    </div>
  );
};

export default DoctorsList;
