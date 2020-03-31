import axios from 'axios';
import {VolunteerRequestService} from './VolunteerRequestService';
import {API_URL} from './serviceConstants';

describe('VolunteerRequestService', () => {
  it('should call submitVolunteerRequest endpoint', async () => {
    axios.post = jest.fn();
    const requestData = {
      name: 'yoda',
      title: 'train jedi',
      details: 'focus on using the force',
      date: '12/31/2020',
      zip: '33333',
      phoneNumber: '1112224444',
      email: 'yoda@jeditemple.space',
    };
    await VolunteerRequestService.submitVolunteerRequest(requestData);

    expect(axios.post).toHaveBeenCalledWith(
      `${API_URL}/volunteer-requests`,
      requestData,
    );
  });
  it('should call getVolunteerRequest endpoint', async () => {
    axios.get = jest.fn();
    await VolunteerRequestService.getVolunteerRequests();

    expect(axios.get).toHaveBeenCalledWith(`${API_URL}/volunteer-requests`);
  });
});
