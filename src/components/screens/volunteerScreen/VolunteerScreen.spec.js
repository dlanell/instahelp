import React from 'react';
import {render} from 'react-native-testing-library';
import {VolunteerScreen} from './VolunteerScreen';

const routeParams = {
  params: {
    volunteerRequest: {
      title: 'deliver lightSaber',
      date: '2020-01-01',
      zip: '30303',
      details: 'deliver to jedi temple',
    },
  },
};

describe('VolunteerScreen', () => {
  describe('by default', () => {
    it('should render request title', () => {
      const renderAPI = render(<VolunteerScreen route={routeParams} />);
      expect(renderAPI.queryByTestId('volunteer-request-title')).not.toBeNull();
    });
    it('should render request date', () => {
      const renderAPI = render(<VolunteerScreen route={routeParams} />);
      expect(renderAPI.queryByTestId('volunteer-request-date')).not.toBeNull();
    });
    it('should render request zip', () => {
      const renderAPI = render(<VolunteerScreen route={routeParams} />);
      expect(renderAPI.queryByTestId('volunteer-request-zip')).not.toBeNull();
    });
    it('should render request details', () => {
      const renderAPI = render(<VolunteerScreen route={routeParams} />);
      expect(
        renderAPI.queryByTestId('volunteer-request-details'),
      ).not.toBeNull();
    });
    it('should render name field', () => {
      const renderAPI = render(<VolunteerScreen route={routeParams} />);
      expect(renderAPI.queryByTestId('volunteer-name-field')).not.toBeNull();
    });
    it('should render phone number field', () => {
      const renderAPI = render(<VolunteerScreen route={routeParams} />);
      expect(
        renderAPI.queryByTestId('volunteer-phone-number-field'),
      ).not.toBeNull();
    });
  });
});
