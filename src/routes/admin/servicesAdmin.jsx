import React from 'react';
import AdminHeader from '../../components/admin/AdminHeader';
import ServiceList from '../../components/admin/ServiceList';

const services = () => {
  return (
    <div className="h-full w-full flex-1">
      <AdminHeader title="Services" subtitle="Manage your services" />
      <ServiceList />
    </div>
  );
};

export default services;
