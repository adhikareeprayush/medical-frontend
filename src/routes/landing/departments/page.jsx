import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDepartmentBySlug } from '../../../utils/api';
import PageBanner from '../../../components/landing/PageBanner';
import Loader from '../../../components/common/Loader';
import { getTransformedImageUrl } from '../../../utils/getTransformedImageUrl';
import { ProgressiveImage } from '../../../utils/ProgressiveImage';
const fallBackImage =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAOVBMVEXm6ezb3uGXoazq7e/Dyc/l6ey/xcyrs7vX3OCnr7jV2d6Zo63O09ibpa+5wMezusLv8fTP1NnIzdMlnmvOAAABdElEQVR4nO3Z0ZKaMBiAUUwQlsaIy/s/bAHdabXxdmn7n3PDCDeZb0JA0nUAAAAAAAAAAAAAAAAAAAAAAAAAAP+u3HT0qA6UT/3Q1J+iZslDemsIGmVJpY5NtaTl6NEdItcyt5eTnMdSY06UlD7eXMk/UvrWofwtzu+bdNGb5NPl4/VGCd4kz+tjZnq5FrxJn8pqfp4psZvkqVxvfUmabB5Naulvn78S3NsEbzKkMpYy3lvkft6PsZt03bSusfW8n8rXVPblNnqTfBkeL/JbkrJHid6k+1pe1yRp/txnSvgmD3uSnC9bFE129yTbrbRG0WTzleQepVZNfkuyR9HkOck9Svgmz0nW30uJ3uQ1iWdxI0n4Jo0k0Zu0kgRv0kwStsn23T63k4RtkmsZb+s/4euttb8zxdzfWbYvA7WO0x9qSZejR3eM3Ke0ZmnuF/cxp8m2s7MMfctyjpoEAAAAAAAAAAAAAAAAAAAAAAAAAPgPnHj1E96TDiAitj9wAAAAAElFTkSuQmCC';

const DepartmentPage = () => {
  const { slug } = useParams();
  console.log('DepartmentPage slug:', slug);
  const [department, setDepartment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDepartmentBySlug = async () => {
      console.log('Fetching department with slug:', slug);
      try {
        if (!slug) {
          setError('Invalid department slug');
          return;
        }

        const response = await getDepartmentBySlug(slug);
        setDepartment(response.data.data);
        console.log('Fetched department:', response.data.data);
        setLoading(false);
      } catch {
        setError('Failed to fetch department details');
        setLoading(false);
      }
    };

    fetchDepartmentBySlug();
  }, [slug]);

  if (error)
    return (
      <div className="min-h-[80vh] py-10 text-center text-red-600">{error}</div>
    );

  return (
    <div className="min-h-[80vh]">
      <PageBanner
        subtitle="Department"
        subSubtitle={department?.name}
        title={department?.name}
        backgroundImage={department?.image_url || fallBackImage}
      />
      <section className="py-5">
        {error ? (
          <div className="min-h-[80vh] py-10 text-center text-red-600">
            {error}
          </div>
        ) : loading ? (
          <Loader />
        ) : (
          <div className="flex flex-col gap-4">
            <div className="h-[300px] w-full md:h-[400px] lg:h-[500px]">
              <ProgressiveImage
                lowQualitySrc={getTransformedImageUrl(
                  department.image_url,
                  40,
                  40,
                )}
                highQualitySrc={getTransformedImageUrl(
                  department.image_url,
                  1080,
                  720,
                )}
                alt={department.name}
                width={350}
                height={300}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className=" ">
              <div className="flex flex-col gap-2 py-1">
                <h1 className="font-display2 text-primary">
                  {department.name}
                </h1>
                <h2 className="font-body1 bg-secondary w-fit rounded-lg p-1 text-white">
                  {department.nepali}
                </h2>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: department.description }}
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default DepartmentPage;
