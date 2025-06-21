import { Link } from 'react-router-dom';
import { getTransformedImageUrl } from '../../utils/getTransformedImageUrl';
import { ProgressiveImage } from '../../utils/ProgressiveImage';

const DepartmentCard = ({ dept }) => {
  console.log(dept);
  return (
    <Link
      key={dept.id}
      to={`/departments/${dept.slug}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md"
    >
      <ProgressiveImage
        lowQualitySrc={getTransformedImageUrl(dept.image_url, 40, 40)}
        highQualitySrc={getTransformedImageUrl(dept.image_url, 1080, 720)}
        alt={dept.name}
        className="h-[350px] w-full object-cover"
      />

      <div className="flex flex-col items-center justify-center px-2 pb-2">
        <h3 className="mt-2 text-center text-lg font-semibold md:text-left">
          {dept.name}
        </h3>
        <h3 className="bg-primary my-1 px-1 py-0.5 text-center text-sm font-semibold text-white md:text-left">
          {dept.nepali}
        </h3>
        {/* Render HTML description safely */}
        <div
          className="line-clamp-4 text-center text-sm"
          dangerouslySetInnerHTML={{ __html: dept.description }}
        />
      </div>
    </Link>
  );
};

export default DepartmentCard;
