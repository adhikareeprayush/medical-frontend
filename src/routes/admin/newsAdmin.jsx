import React from 'react';
import AdminHeader from '../../components/admin/AdminHeader';
import NewsList from '../../components/admin/NewsList';

const news = () => {
  return (
    <div className="h-full w-full flex-1">
      <AdminHeader title="News" subtitle="Manage your news" />
      <NewsList />
    </div>
  );
};

export default news;
