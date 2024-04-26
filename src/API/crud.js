import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users/";

export const readAllData = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error reading the data:", error);
    throw error;
  }
};

export const createUser = async (data) => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      data
    );
    return response.data; // Assuming the API returns the created data
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
