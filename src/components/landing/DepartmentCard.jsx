import { Link } from 'react-router-dom';

const DepartmentCard = ({ dept }) => {
  return (
    <Link key={dept.id} className="bg-accent text-primary shadow-md">
      <img
        src={dept.image}
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
        <p className="text-center text-sm">{dept.description}</p>
      </div>
    </Link>
  );
};

export default DepartmentCard;
