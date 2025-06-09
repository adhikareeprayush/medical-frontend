const DoctorsList = ({ doctors }) => {
  return (
    <div>
      {doctors.length > 0 ? (
        doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <img src={doctor.image} alt={doctor.name} />
            <h3>{doctor.name}</h3>
          </div>
        ))
      ) : (
        <p>No doctors found</p>
      )}
    </div>
  );
};

export default DoctorsList;
