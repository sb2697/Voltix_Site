import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const fetchProjectById = (projectId: string) => {
  return axios.get(`${BASE_URL}/papi/projects/id?id=${projectId}`);
};
export const fetchProjects = () => {
  return axios.get(`${BASE_URL}/papi/projects`);
};
export const fetchServices = () => {
    return axios.get(`${BASE_URL}/sapi/services`);
};
export const fetchServiceById = (serviceId : string) => {
    return axios.get(`${BASE_URL}/sapi/services/id?id=${serviceId}`);
};
export const fetchTestimonials = () =>{
    return axios.get(`${BASE_URL}/tapi/testimonials`);
};
// export const fetchContacts = () =>{
//   return axios.get(`${BASE_URL}/capi/contact-entires`);
// };
export const fetchData = () => {
  return axios.get(`${BASE_URL}/api/data`);
}
export const postContact = (formData: { name: string; phone_no: string; email: string; message: string; }) => {
  // Use Axios to make a POST request to the API endpoint
  return axios.post(`${BASE_URL}/capi/contact-entries`, formData);
};
