import React from 'react';
import PageBanner from '../../components/landing/PageBanner';
import PackageBanner from '../../assets/images/hospital_banner/hospital_banner.jpg';
import { useParams } from 'react-router-dom';
import { getPackageById } from '../../utils/api';

const PackagePage = () => {
  const { slug } = useParams();
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const fetchData = async () => {
    try {
      const packageId = parseInt(slug, 10);
      const response = await getPackageById(packageId); // response includes { status, data, message }

      setData(response?.data.data);
      console.log('Fetched package data:', response?.data.data);
    } catch (error) {
      console.error('Error fetching package data:', error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [slug]);

  if (!data) {
    return <div className="text-center text-red-500">Package not found</div>;
  }

  // Convert comma-separated checks string into an array
  const checks = data.checks?.split(',').map((item) => item.trim()) || [];

  return (
    <>
      <PageBanner
        subtitle="Package"
        subSubtitle={`${data.title}`}
        title={data.title}
        backgroundImage={PackageBanner}
      />
      <section className="container mx-auto px-2 py-6 md:px-4 md:py-12 xl:px-[140px]">
        <h2 className="text-primary mb-5 text-3xl font-semibold">
          Tests Included:
        </h2>

        <ul className="divide-y divide-gray-200 rounded-lg border shadow-md">
          {checks.map((testName, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between px-4 py-3"
            >
              <span className="font-medium">{testName}</span>
              <div className="text-right">
                <span className="text-primary font-semibold">Included</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-lg font-semibold">
            Price:{' '}
            <span className="text-gray-500 line-through">Rs. {data.price}</span>{' '}
            <span className="text-secondary">Rs. {data.discounted_price}</span>
          </span>
          <span className="text-sm text-gray-500">Status: {data.status}</span>
        </div>

        <div className="mt-5 text-center sm:mt-8">
          <a
            href={data.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-secondary inline-block rounded-lg px-4 py-3 font-semibold text-white transition-colors duration-200 sm:px-8"
          >
            Book Now on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
};

export default PackagePage;
