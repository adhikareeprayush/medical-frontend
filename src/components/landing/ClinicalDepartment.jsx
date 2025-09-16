import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllDepartments } from '../../utils/api.js';
import { getTransformedImageUrl } from '../../utils/getTransformedImageUrl.js';
import { ProgressiveImage } from '../../utils/ProgressiveImage.jsx';

const INITIAL_VISIBLE = 8;
const INCREMENT = 8;
const MAX_LIMIT = 100; // set high to fetch everything once

const ClinicalDepartment = () => {
  const [departments, setDepartments] = useState([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await getAllDepartments(MAX_LIMIT);
        setDepartments(removeDuplicates(response.data.data));
      } catch (err) {
        console.error(err);
        setError('Failed to load departments');
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  const removeDuplicates = (arr) => {
    const map = new Map();
    arr.forEach((dept) => {
      if (!map.has(dept.id)) map.set(dept.id, dept);
    });
    return Array.from(map.values());
  };

  const handleToggleExpand = () => {
    if (expanded) {
      setVisibleCount(INITIAL_VISIBLE);
    } else {
      setVisibleCount(departments.length); // show all
    }
    setExpanded(!expanded);
  };

  const displayedDepartments = departments.slice(0, visibleCount);

  return (
    <section className="mx-auto my-20 max-w-7xl px-4">
      <h1 className="text-primary font-display2 sm:font-display1 mb-10 text-center tracking-wide">
        Clinical Department in Nisarga
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading departments...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {displayedDepartments.map((department) => (
              <Link
                key={department.id}
                to={`/departments/${department.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm transition hover:shadow-md"
              >
                <div className="bg-primary/10 mx-auto mb-3 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full">
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
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-primary mb-1 line-clamp-2 text-lg font-semibold">
                  {department.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {department.nepali_name}
                </p>
              </Link>
            ))}
          </div>

          {departments.length > INITIAL_VISIBLE && (
            <div className="mt-6 text-center">
              <button
                onClick={handleToggleExpand}
                className="text-primary border-primary hover:bg-primary border px-4 py-2 font-semibold transition hover:text-white"
              >
                {expanded ? 'View Less' : 'View More'}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default ClinicalDepartment;
