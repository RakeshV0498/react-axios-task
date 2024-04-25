import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users/";

export const readAllData = async () => {
  try {
    const response = await axios.get(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error reading the data:", error);
    throw error;
  }
};

// readAllData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
