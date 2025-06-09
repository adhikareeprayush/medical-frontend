import AdminHeader from '../../components/admin/AdminHeader';
import Doctors from '../../components/admin/Doctors';
const DoctorsAdmin = () => {
  return (
    <div className="h-full w-full flex-1">
      <AdminHeader title="Doctors" subtitle="Manage your doctors" />
      <Doctors />
    </div>
  );
};

export default DoctorsAdmin;
