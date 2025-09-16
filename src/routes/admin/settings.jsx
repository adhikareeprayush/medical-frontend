import AdminHeader from '../../components/admin/AdminHeader';
import ContactAdmin from '../../components/admin/ContactAdmin';
import SocialAdmin from '../../components/admin/SocialAdmin';

const Settings = () => {
  return (
    <div className="h-full w-full flex-1">
      <AdminHeader title="Settings" subtitle="Manage your site settings" />
      <ContactAdmin />
      <SocialAdmin />
    </div>
  );
};

export default Settings;
