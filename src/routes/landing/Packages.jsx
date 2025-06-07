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
        title={Packages}
        backgroundImage={PackageBanner}
      />
      <section className="relative flex h-full w-full flex-col items-center justify-center py-4">
        <div className="grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6">
          {Data.map((test, index) => (
            <PackagesComp key={index} testData={test} />
          ))}
        </div>
      </section>
      <ContactSection />
    </>
  );
};

export default Packages;
