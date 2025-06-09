import { useEffect, useState } from 'react';
import { getSocial, updateSocial } from '../../utils/social';
import { toast } from 'react-toastify';
import { isValidUrl } from '../../utils/social';

const SocialAdmin = () => {
  const [formValues, setFormValues] = useState({
    facebook: '',
    instagram: '',
    linkedIn: '',
  });
  const [errors, setErrors] = useState({});
  const [isEditingSocial, setIsEditingSocial] = useState(false);

  useEffect(() => {
    const fetchLinks = async () => {
      const data = await getSocial();
      console.log('Fetched social links:', data);
      setFormValues(data);
    };
    fetchLinks();
  }, []);

  const validateForm = () => {
    const errs = {};
    Object.entries(formValues).forEach(([key, value]) => {
      if (!value.trim()) {
        errs[key] = 'This field is required.';
      } else if (!isValidUrl(value)) {
        errs[key] = 'Invalid URL format.';
      }
    });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    try {
      await updateSocial(formValues); // Send entire object
      toast.success('Social links updated successfully!');
      setIsEditingSocial(false);
    } catch (error) {
      toast.error('Failed to update links. Try again.');
    }
  };

  const handleChange = (key, value) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  return (
    <div className="mt-6 flex flex-col">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-semibold">Social Links</h2>
        <button
          className="btn btn-secondary"
          onClick={() => setIsEditingSocial(!isEditingSocial)}
        >
          {isEditingSocial ? 'Cancel' : 'Edit'}
        </button>
      </div>

      <form className="mt-4 grid grid-cols-2 gap-4">
        {Object.keys(formValues).map((key) => (
          <div className="flex flex-col gap-1" key={key}>
            <label htmlFor={key} className="text-[16px] font-medium capitalize">
              {key}
            </label>
            <input
              type="text"
              id={key}
              value={formValues[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              disabled={!isEditingSocial}
              className={`rounded-md border px-2 py-1 shadow-sm focus:shadow-md focus:outline-none ${
                errors[key] ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors[key] && (
              <span className="text-sm text-red-600">{errors[key]}</span>
            )}
          </div>
        ))}
      </form>

      {isEditingSocial && (
        <div className="mt-4">
          <button className="btn btn-secondary" onClick={handleSave}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default SocialAdmin;
