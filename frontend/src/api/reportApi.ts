import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const uploadReport = async (file: File) => {
  const formData = new FormData();
  formData.append('reportFile', file);

  const response = await axios.post(`${API_URL}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export const fetchReports = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
