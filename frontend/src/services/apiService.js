import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/user/';

/**
 * Fetches a summary of the given text from the backend.
 * @param {string} text - The text to summarize.
 * @returns {Promise<Object>} - The response containing the summary.
 */
export const getSummary = async (text) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/summary/`, {
      params: { text },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching summary:', error.response?.data || error.message);
    throw error;
  }
};

/**
 * Posts a chosen topic to the backend.
 * @param {string} topic - The topic chosen by the user.
 * @returns {Promise<Object>} - The response from the backend.
 */
export const chooseTopic = async (topic) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/choose-topic/`, { topic });
    return response.data;
  } catch (error) {
    console.error('Error choosing topic:', error.response?.data || error.message);
    throw error;
  }
};
