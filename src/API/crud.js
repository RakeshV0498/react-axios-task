import axios from "axios";

// const url = "https://jsonplaceholder.typicode.com/users/";
const url = "https://65e294dfa8583365b31844f1.mockapi.io/users/";

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
    const response = await axios.post(url, data);
    return response.data; // Assuming the API returns the created data
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const editUser = async (userId, data) => {
  try {
    const userUrl = `${url}${userId}`;
    const response = await axios.put(userUrl, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  const deleteUrl = `${url}${userId}`;
  try {
    const response = await axios.delete(deleteUrl);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};

export const readUserData = async (userId) => {
  try {
    const response = await axios.get(`${url}${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
