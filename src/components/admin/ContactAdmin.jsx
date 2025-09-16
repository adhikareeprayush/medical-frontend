import { useEffect, useState } from 'react';
import { getContactCards, editContactDetails } from '../../utils/contact';
import { toast } from 'react-toastify';

const ContactAdmin = () => {
  const [contactDetails, setContactDetails] = useState([]);
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [formValues, setFormValues] = useState({
    Emergency: '',
    Location: '',
    Email: '',
    'Working Hours': '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const cards = await getContactCards();
        if (!cards.length) {
          console.warn('No contact cards available');
          setContactDetails([]);
        } else {
          setContactDetails(cards);
          const initial = {};
          cards.forEach((card) => {
            initial[card.title] = card.details.map((d) => d.value).join(', ');
          });
          setFormValues(initial);
        }
      } catch (error) {
        console.error('Error fetching contact cards:', error);
        setContactDetails([]);
      }
    };

    fetchContacts();
  }, []);

  const validateForm = () => {
    const errs = {};
    if (
      !formValues.Emergency.match(/^\s*\+?\d[\d\s+-]*(,\s*\+?\d[\d\s+-]*)*\s*$/)
    ) {
      errs.Emergency = 'Invalid phone number format. Use commas for multiple.';
    }
    if (
      !formValues.Email.match(
        /^([\w.%+-]+@[\w.-]+\.[A-Za-z]{2,})(,\s*[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,})*$/,
      )
    ) {
      errs.Email = 'Invalid email format. Use commas for multiple.';
    }
    if (!formValues.Location.trim()) {
      errs.Location = 'Location is required.';
    }
    if (!formValues['Working Hours'].trim()) {
      errs['Working Hours'] = 'Working hours are required.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    const dataToUpdate = {
      phone_number: formValues.Emergency,
      email: formValues.Email,
      location: formValues.Location,
      work_hour: formValues['Working Hours'],
    };

    try {
      await editContactDetails(dataToUpdate);
      setIsEditingContact(false);
      toast.success('Contact details updated successfully!');
    } catch (error) {
      console.error('Save failed:', error);
      toast.error('Failed to update contact details. Please try again.');
    }
  };

  const handleChange = (key, value) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  return (
    <div className="mt-6 flex flex-col">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-semibold">Contact Details</h2>
        <button
          className="btn btn-secondary"
          onClick={() => setIsEditingContact(!isEditingContact)}
        >
          {isEditingContact ? 'Cancel' : 'Edit'}
        </button>
      </div>

      <form className="mt-4 grid grid-cols-2 gap-4">
        {Object.keys(formValues).map((label) => (
          <div className="flex flex-col gap-1" key={label}>
            <label htmlFor={label} className="text-[16px] font-medium">
              {label}
            </label>
            <input
              type="text"
              id={label}
              value={formValues[label]}
              onChange={(e) => handleChange(label, e.target.value)}
              disabled={!isEditingContact}
              className={`rounded-md border px-2 py-1 shadow-sm focus:shadow-md focus:outline-none ${
                errors[label] ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors[label] && (
              <span className="text-sm text-red-600">{errors[label]}</span>
            )}
          </div>
        ))}
      </form>

      {isEditingContact && (
        <div className="mt-4">
          <button className="btn btn-secondary" onClick={handleSave}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactAdmin;
