import PageBanner from '../../components/landing/PageBanner';
import ServiceCard from '../../components/landing/ServiceCard';
import serviceBanner from '../../assets/images/banner/serviceBanner.png';
import ContactSection from '../../components/landing/ContactSection';
import { getAllServices } from '../../utils/api';
import { useEffect, useState } from 'react';

const Services = () => {
  const [services, setServices] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getAllServices();
        setServices(response.data.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <>
      <PageBanner
        subtitle="Services"
        title={'Services'}
        backgroundImage={serviceBanner}
      />
      <section className="relative flex w-full flex-col items-center justify-center gap-10 px-3 py-5 lg:px-8">
        {loading ? (
          <div className="flex min-h-[50vh] justify-center py-20">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
          </div>
        ) : services?.length > 0 ? (
          <div className="grid h-full w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services?.map((service) => (
              <div className="h-full">
                <ServiceCard key={service.id} service={service} />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full text-center text-gray-500">
            No services available.
          </div>
        )}
      </section>
      <ContactSection />
    </>
  );
};

export default Services;
