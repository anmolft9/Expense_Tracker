import axios from "axios";
const rootURL = "http://localhost:8000";
const userEP = rootURL + "/api/v1/user";

export const postNewUser = async (obj) => {
  try {
    const response = await axios.post(userEP, obj);
    console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const loginUser = async (obj) => {
  try {
    const response = await axios.post(userEP + "/login", obj);
    console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
