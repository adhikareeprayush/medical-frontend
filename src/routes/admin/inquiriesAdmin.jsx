import React from 'react';
import AdminHeader from '../../components/admin/AdminHeader';
import InquiriesList from '../../components/admin/InquiriesList';

const inquiries = () => {
  return (
    <div className="h-full w-full flex-1">
      <AdminHeader title="Inquiries" subtitle="Manage your inquiries" />
      <InquiriesList />
    </div>
  );
};

export default inquiries;
