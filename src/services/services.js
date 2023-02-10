import axios from 'axios';

axios.defaults.baseURL = 'https://63e53efd8e1ed4ccf6f0ccfe.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  // console.log(data);
  return data;
}
// console.log(fetchContacts());

export async function addContacts(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContacts(id) {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
}