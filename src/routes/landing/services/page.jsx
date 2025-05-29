import React, { useState } from 'react';
import services from '../../../data/service.json';
import ServiceSidebar from '../../../components/landing/ServiceSidebar';
import ServiceDetail from '../../../components/landing/ServiceDetail';
import PageBanner from '../../../components/landing/PageBanner';

const ServicesPage = () => {
  const [selectedSlug, setSelectedSlug] = useState(services[0]?.slug);

  const selectedService = services.find((s) => s.slug === selectedSlug);

  return (
    <>
      <PageBanner
        subtitle="Services"
        title={'Services'}
        backgroundImage={selectedService?.image || ''}
      />
      <section className="flex gap-4 py-5">
        <ServiceSidebar
          services={services}
          selectedSlug={selectedSlug}
          onSelect={setSelectedSlug}
        />
        <ServiceDetail service={selectedService} />
      </section>
    </>
  );
};

export default ServicesPage;
