import AdminHeader from '../../components/admin/AdminHeader';
import Departments from '../../components/admin/Departments';

const dashboard = () => {
  return (
    <>
      <AdminHeader
        title={'Dashboard'}
        subtitle={'Overview of all departments'}
      />
      <Departments />
    </>
  );
};

export default dashboard;
