import AdminHeader from '../../components/admin/AdminHeader';
import Departments from '../../components/admin/Departments';

const department = () => {
  return (
    <>
      <AdminHeader title={'Departments'} subtitle={'Manage your departments'} />
      <Departments />
    </>
  );
};

export default department;
