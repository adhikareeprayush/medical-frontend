import AdminHeader from '../../components/admin/AdminHeader';
import TestimonialList from '../../components/admin/TestimonialList';

const testimonial = () => {
  return (
    <div className="h-full w-full flex-1">
      <AdminHeader title="Testimonial" subtitle="Manage your testimonial" />
      <TestimonialList />
    </div>
  );
};

export default testimonial;
