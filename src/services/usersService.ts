import axios from 'axios';

// Load the SheetDB URL from the environment variables
const SHEETDB_URL = process.env.REACT_APP_SHEETDB_URL;

if (!SHEETDB_URL) {
  throw new Error('SHEETDB_URL is not defined in the .env file');
}

export const fetchUsers = async () => {
  try {
    const response = await axios.get(SHEETDB_URL);
    return response.data; // Returns an array of rows from the sheet
  } catch (error) {
    console.error('Error fetching data from SheetDB:', error);
    throw error;
  }
};
