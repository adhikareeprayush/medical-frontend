import React from 'react';
import AdminHeader from '../../components/admin/AdminHeader';
import ServiceList from '../../components/admin/ServiceList';

const services = () => {
  return (
    <div className="h-full w-full flex-1">
      <AdminHeader title="News" subtitle="Manage your news" />
      <ServiceList />
    </div>
  );
};

export default services;
