import { http } from './http.js';

// Submit Contact Enquiry
export const submitContactApi = async (formData) => {
  return await http('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
};
