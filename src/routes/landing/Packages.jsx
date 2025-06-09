import PackagesComp from '../../components/landing/PackagesComp';
import Data from '../../data/packages.json';
import PageBanner from '../../components/landing/PageBanner';
import PackageBanner from '../../assets/images/hospital_banner/hospital_banner.jpg';
import ContactSection from '../../components/landing/ContactSection';

const Packages = () => {
  return (
    <>
      <PageBanner
        subtitle="Package"
        title="Packages"
        backgroundImage={PackageBanner}
      />

      <section className="container mx-auto px-4 py-8 md:py-12 xl:px-[140px]">
        <h1 className="text-primary mb-6 text-center text-4xl font-bold lg:text-5xl">
          Our Packages
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-5">
          {Data.map((test, index) => (
            <div key={index} className="flex h-full">
              <PackagesComp testData={test} />
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default Packages;
