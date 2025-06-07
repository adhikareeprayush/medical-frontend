const AdminHeader = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-0">
      <h2 className="text-3xl font-medium">{title}</h2>
      <p className="text-primary font-small">{subtitle}</p>
    </div>
  );
};

export default AdminHeader;
