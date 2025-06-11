import { Link } from 'react-router-dom';

const DepartmentCard = ({ dept }) => {
  return (
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
    </Link>
  );
};

export default DepartmentCard;
