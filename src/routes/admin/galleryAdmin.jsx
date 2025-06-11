import React from 'react';
import AdminHeader from '../../components/admin/AdminHeader';
import GalleryList from '../../components/admin/GalleryList';

const gallery = () => {
  return (
    <div className="h-full w-full flex-1">
      <AdminHeader title="Gallery" subtitle="Manage your gallery" />
      <GalleryList />
    </div>
  );
};

export default gallery;
