import { Link } from 'react-router-dom';
const fallBackImage =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAOVBMVEXm6ezb3uGXoazq7e/Dyc/l6ey/xcyrs7vX3OCnr7jV2d6Zo63O09ibpa+5wMezusLv8fTP1NnIzdMlnmvOAAABdElEQVR4nO3Z0ZKaMBiAUUwQlsaIy/s/bAHdabXxdmn7n3PDCDeZb0JA0nUAAAAAAAAAAAAAAAAAAAAAAAAAAP+u3HT0qA6UT/3Q1J+iZslDemsIGmVJpY5NtaTl6NEdItcyt5eTnMdSY06UlD7eXMk/UvrWofwtzu+bdNGb5NPl4/VGCd4kz+tjZnq5FrxJn8pqfp4psZvkqVxvfUmabB5Naulvn78S3NsEbzKkMpYy3lvkft6PsZt03bSusfW8n8rXVPblNnqTfBkeL/JbkrJHid6k+1pe1yRp/txnSvgmD3uSnC9bFE129yTbrbRG0WTzleQepVZNfkuyR9HkOck9Svgmz0nW30uJ3uQ1iWdxI0n4Jo0k0Zu0kgRv0kwStsn23T63k4RtkmsZb+s/4euttb8zxdzfWbYvA7WO0x9qSZejR3eM3Ke0ZmnuF/cxp8m2s7MMfctyjpoEAAAAAAAAAAAAAAAAAAAAAAAAAPgPnHj1E96TDiAitj9wAAAAAElFTkSuQmCC';

const DepartmentCard = ({ dept }) => {
  return (
<<<<<<< HEAD
    <Link
      key={dept.id}
      to={`/departments/${dept.id}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md"
    >
      <article className="flex flex-col">
        <img
          src={dept.image || '/placeholder.jpg'}
          alt={dept.name || 'Department Image'}
          className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="flex flex-col justify-center gap-2 px-4 py-3">
          <h3 className="text-lg font-semibold text-primary">{dept.name}</h3>
          <span className="bg-primary inline-block w-fit rounded px-2 py-0.5 text-sm font-medium text-white">
            {dept.nepali}
          </span>
          <p className="text-sm text-gray-600">{dept.description}</p>
        </div>
      </article>
=======
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
>>>>>>> 693f4030d23270b99c1f88900b7dd46f4013d548
    </Link>
  );
};

export default DepartmentCard;
