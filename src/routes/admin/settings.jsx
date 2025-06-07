import AdminHeader from '../../components/admin/AdminHeader';

const settings = () => {
  return (
    <div className="h-full w-full flex-1">
      <AdminHeader title="Settings" subtitle="Manage your site settings" />
      {/* Edit the contact details */}
      <div className="mt-6 flex flex-col">
        <h3 className="text-[18px] text-gray-600">Your contact details</h3>
        <form action="" disabled className="flex flex-col gap-2">
          <label htmlFor="Emergency"></label>
          <input type="text" />
        </form>
      </div>
    </div>
  );
};

export default settings;
