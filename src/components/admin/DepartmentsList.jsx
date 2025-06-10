const DepartmentsList = ({ departments }) => {
  return (
    <div>
      {departments.map((department) => {
        <div key={department.id} className="department-card">
          <h3>{department.name}</h3>
          <p>{department.description}</p>
          <img src={department.image_url} alt={department.name} />
          <p>{department.nepali}</p>
        </div>;
      })}
    </div>
  );
};

export default DepartmentsList;
