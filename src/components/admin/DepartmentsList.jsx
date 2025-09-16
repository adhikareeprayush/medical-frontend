const DepartmentsList = ({ departments, onEdit, onDelete, isEditing }) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {departments.map((department) => (
          <div
            key={department.id}
            className="relative overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:shadow-lg"
          >
            {department.image_url && (
              <img
                src={department.image_url}
                alt={department.name}
                className="h-48 w-full object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                {department.name}
              </h3>
              <div className="text-sm text-gray-600">
                {department.description ? (
                  <span
                    className="inline-block"
                    dangerouslySetInnerHTML={{
                      __html: department.description,
                    }}
                  />
                ) : (
                  <p className="text-gray-400 italic">
                    No description available.
                  </p>
                )}
              </div>
              {department.nepali && (
                <p className="mt-2 text-sm text-gray-500">
                  {department.nepali}
                </p>
              )}
            </div>

            {isEditing && (
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  className="rounded bg-blue-600 px-2 py-1 text-xs text-white"
                  onClick={() => onEdit(department)}
                >
                  Edit
                </button>
                <button
                  className="rounded bg-red-600 px-2 py-1 text-xs text-white"
                  onClick={() => onDelete(department.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentsList;
