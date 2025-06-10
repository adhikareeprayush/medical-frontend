// utils/social.js

import { getSocialLinks, updateSocialLinks } from './api';

export const getSocial = async () => {
  try {
    const response = await getSocialLinks();
    const data = response.data.data[0];
    console.log('Data:', data);

    return {
      facebook: data.facebook || '',
      instagram: data.instagram || '',
      linkedIn: data.linkedIn || '',
    };
  } catch (error) {
    console.error('Failed to fetch social links:', error);
    return {
      facebook: '',
      instagram: '',
      linkedIn: '',
    };
  }
};

export const updateSocial = async (socialLinksObj) => {
  try {
    console.log('Updating social links with:', socialLinksObj);
    const response = await updateSocialLinks(socialLinksObj); // send { facebook, instagram, linkedin }
    return response.data;
  } catch (error) {
    console.error('Failed to update social links:', error);
    throw error;
  }
};

export const isValidUrl = (value) => {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};
