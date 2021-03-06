import axios from "axios";
const baseUrl = "/api/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = newObject => {
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data);
};

const remove = id => {
  const request = axios.delete(`${baseUrl}/${id.id}`);
  return request.then(response => response.data);
};

const modify = (id, number) => {
  const request = axios.put(`${baseUrl}/${id.id}`, {
    name: id.name,
    number: number,
    id: id.id
  });
  return request.then(response => response.data);
};
export default { getAll, create, remove, modify };
