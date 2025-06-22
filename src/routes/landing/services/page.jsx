import React, { useEffect, useState } from 'react';
import ServiceSidebar from '../../../components/landing/ServiceSidebar';
import ServiceDetail from '../../../components/landing/ServiceDetail';
import PageBanner from '../../../components/landing/PageBanner';
import { getAllServices, getServiceBySlug } from '../../../utils/api';
import { useNavigate, useParams } from 'react-router-dom';

const ServicesPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [services, setServices] = useState([]);
  const [selectedSlug, setSelectedSlug] = useState(slug);
  const [selectedService, setSelectedService] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch all services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await getAllServices();
        const data = res.data.data;
        setServices(data);

        const initialSlug = slug || data[0]?.slug;
        if (!slug && initialSlug) {
          navigate(`/services/${initialSlug}`, { replace: true });
        } else {
          setSelectedSlug(slug);
        }
      } catch (err) {
        console.error('Failed to load services:', err);
      }
    };
    fetchServices();
  }, [slug, navigate]);

  // Fetch selected service
  useEffect(() => {
    if (!selectedSlug) return;

    const fetchService = async () => {
      setLoading(true);
      try {
        const res = await getServiceBySlug(selectedSlug);
        setSelectedService(res.data.data);
      } catch (err) {
        console.error('Failed to load service by slug:', err);
        setSelectedService(null);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [selectedSlug]);

  // When sidebar item is clicked
  const handleSlugChange = (newSlug) => {
    navigate(`/services/${newSlug}`);
    setSelectedSlug(newSlug);
  };

  return (
    <>
      <PageBanner
        subtitle="Services"
        title={selectedService?.title}
        backgroundImage={selectedService?.image || ''}
      />
      <section className="flex gap-4 py-5">
        <ServiceSidebar
          services={services}
          selectedSlug={selectedSlug}
          onSelect={handleSlugChange}
        />
        {loading ? (
          <div className="flex flex-1 items-center justify-center py-10">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
          </div>
        ) : selectedService ? (
          <ServiceDetail service={selectedService} />
        ) : (
          <div className="flex-1 text-center text-red-500">
            Service not found.
          </div>
        )}
      </section>
    </>
  );
};

export default ServicesPage;
