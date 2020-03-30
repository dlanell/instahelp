import axios from 'axios';
import {API_URL} from './serviceConstants';

export class VolunteerRequestService {
  static submitVolunteerRequest = async data => {
    return await axios.post(`${API_URL}/volunteer-requests`, data);
    // return Promise.resolve(true);
  };
}
