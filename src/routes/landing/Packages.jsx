import PackagesComp from '../../components/landing/PackagesComp';
import Data from '../../data/packages.json';
import PageBanner from '../../components/landing/PageBanner';
import PackageBanner from '../../assets/images/hospital_banner/hospital_banner.jpg';
import ContactSection from '../../components/landing/ContactSection';
import { getAllPackages } from '../../utils/api';
import { useState, useEffect } from 'react';

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchPackages = async () => {
    try {
      const response = await getAllPackages();
      console.log('Fetched packages:', response.data.data);
      setPackages(response.data.data);
    } catch (error) {
      console.error('Error fetching packages:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <>
      <PageBanner
        subtitle="Package"
        title="Packages"
        backgroundImage={PackageBanner}
      />

      <section className="container mx-auto px-4 py-6 md:py-12 xl:px-8">
        <h1 className="text-primary mb-6 text-center text-4xl font-bold lg:text-5xl">
          Our Packages
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-4">
          {packages.map((pkg) => (
            <div key={pkg.id} className="flex h-full">
              <PackagesComp testData={pkg} />
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default Packages;
