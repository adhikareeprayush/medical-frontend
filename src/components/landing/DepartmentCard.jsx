import { Link } from 'react-router-dom';
const fallBackImage =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAOVBMVEXm6ezb3uGXoazq7e/Dyc/l6ey/xcyrs7vX3OCnr7jV2d6Zo63O09ibpa+5wMezusLv8fTP1NnIzdMlnmvOAAABdElEQVR4nO3Z0ZKaMBiAUUwQlsaIy/s/bAHdabXxdmn7n3PDCDeZb0JA0nUAAAAAAAAAAAAAAAAAAAAAAAAAAP+u3HT0qA6UT/3Q1J+iZslDemsIGmVJpY5NtaTl6NEdItcyt5eTnMdSY06UlD7eXMk/UvrWofwtzu+bdNGb5NPl4/VGCd4kz+tjZnq5FrxJn8pqfp4psZvkqVxvfUmabB5Naulvn78S3NsEbzKkMpYy3lvkft6PsZt03bSusfW8n8rXVPblNnqTfBkeL/JbkrJHid6k+1pe1yRp/txnSvgmD3uSnC9bFE129yTbrbRG0WTzleQepVZNfkuyR9HkOck9Svgmz0nW30uJ3uQ1iWdxI0n4Jo0k0Zu0kgRv0kwStsn23T63k4RtkmsZb+s/4euttb8zxdzfWbYvA7WO0x9qSZejR3eM3Ke0ZmnuF/cxp8m2s7MMfctyjpoEAAAAAAAAAAAAAAAAAAAAAAAAAPgPnHj1E96TDiAitj9wAAAAAElFTkSuQmCC';

const DepartmentCard = ({ dept }) => {
  return (
    <Link to={`${dept.slug}`} className="text-primary bg-white shadow-sm">
      <img
        src={dept.image || fallBackImage}
        alt={dept.name}
        className="h-[320px] w-full object-cover"
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
          className="text-center text-sm"
          dangerouslySetInnerHTML={{ __html: dept.description }}
        />
      </div>
    </Link>
  );
};

export default DepartmentCard;
