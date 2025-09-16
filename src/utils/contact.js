import { getContactDetails, updateContactDetails } from './api';
import phone from '../assets/icons/contact/phone.svg';
import email from '../assets/icons/contact/mail.svg';
import location from '../assets/icons/contact/location.svg';
import clock from '../assets/icons/contact/clock.svg';

/**
 * Fetch contact details and transform into UI-ready card array
 */
export const getContactCards = async () => {
  try {
    const response = await getContactDetails();
    if (
      !response.data ||
      !response.data.data ||
      response.data.data.length === 0
    ) {
      console.warn('No contact data found');
      return [];
    }
    const data = response.data?.data?.[0];

    if (!data) return [];

    const cards = [
      {
        title: 'Emergency',
        icon: phone,
        details: (data.phone_number || '')
          .split(',')
          .map((num) => ({ type: 'phone', value: num.trim() })),
      },
      {
        title: 'Location',
        icon: location,
        details: [{ type: 'address', value: data.location || '' }],
      },
      {
        title: 'Email',
        icon: email,
        details: (data.email || '')
          .split(',')
          .map((mail) => ({ type: 'email', value: mail.trim() })),
      },
      {
        title: 'Working Hours',
        icon: clock,
        details: (data.work_hour || '')
          .split(',')
          .map((hour) => ({ type: 'text', value: hour.trim() })),
      },
    ];

    return cards;
  } catch (error) {
    console.error('Failed to fetch contact cards:', error);
    return [];
  }
};

/**
 * Edit contact details
 * @param {Object} contactData - {
 *   phone_number: string,
 *   email: string,
 *   location: string,
 *   work_hour: string
 * }
 * @returns {Promise<void>}
 */
export const editContactDetails = async (contactData) => {
  try {
    await updateContactDetails(contactData); // assumed API function
  } catch (error) {
    console.error('Failed to edit contact details:', error);
    throw error;
  }
};
