import PageBanner from '../../components/landing/PageBanner';
import ServiceCard from '../../components/landing/ServiceCard';
import mockServices from '../../data/service.json';
import serviceBanner from '../../assets/images/banner/serviceBanner.png';

const services = () => {
  return (
    <>
      <PageBanner
        subtitle="Services"
        title={'Services'}
        backgroundImage={serviceBanner}
      />
      <section className="relative flex h-full w-full flex-col items-center justify-center gap-10 py-5">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {mockServices.map((service) => (
            <div>
              <ServiceCard key={service.id} service={service} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default services;
