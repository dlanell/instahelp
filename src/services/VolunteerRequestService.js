import axios from 'axios';
import {API_URL} from './serviceConstants';

export class VolunteerRequestService {
  static submitVolunteerRequest = async data => {
    return await axios.post(`${API_URL}/volunteer-requests`, data);
  };
  static getVolunteerRequests = async data => {
    return await axios.get(`${API_URL}/volunteer-requests`);
  };
  static volunteerForRequest = async (volunteerRequestId, data) => {
    return await axios.post(
      `${API_URL}/volunteer-requests/${volunteerRequestId}/volunteer`,
      data,
    );
  };
}
