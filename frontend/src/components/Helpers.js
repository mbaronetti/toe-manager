import axios from "axios";

export const fetchData = async endpoint => {
  const response = await axios.get("http://localhost:4000/api/" + endpoint);
  return { data: response.data };
};

export const fetchDataById = async (endpoint, id) => {
  const response = await axios.get(
    "http://localhost:4000/api/" + endpoint + "/" + id
  );
  console.log(endpoint, response.data);
  return { data: response.data };
};

export const postData = async (endpoint, body) => {
  const response = await axios.post(
    "http://localhost:4000/api/" + endpoint,
    ...body
  );
  return response;
};

export const putData = async (endpoint, id, body) => {
  const response = await axios.put(
    "http://localhost:4000/api/" + endpoint + "/" + id,
    ...body
  );
  return response;
};

export const deleteData = async (endpoint, id) => {
  const response = await axios.delete(
    "http://localhost:4000/api/" + endpoint + "/" + id,
    id
  );
  return response;
};
