import AdminHeader from '../../components/admin/AdminHeader';
import PackagesList from '../../components/admin/PackagesList';

const packages = () => {
  return (
    <div className="h-full w-full flex-1">
      <AdminHeader title="Packages" subtitle="Manage your packages" />
      <PackagesList />
    </div>
  );
};

export default packages;
