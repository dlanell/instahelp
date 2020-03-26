import React from 'react';
import {render, fireEvent, act} from 'react-native-testing-library';
import {SubmitRequestScreen} from './SubmitRequestScreen';
import {VolunteerRequestService} from '../../../services/VolunteerRequestService';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('SubmitRequestScreen', () => {
  describe('by default', () => {
    it('should render submit instructions', () => {
      const renderAPI = render(<SubmitRequestScreen />);
      expect(
        renderAPI.queryByTestId('submit-request-instructions'),
      ).not.toBeNull();
    });
    it('should render name field', () => {
      const renderAPI = render(<SubmitRequestScreen />);
      expect(renderAPI.queryByTestId('name-field')).not.toBeNull();
    });
    it('should render request field', () => {
      const renderAPI = render(<SubmitRequestScreen />);
      expect(renderAPI.queryByTestId('request-field')).not.toBeNull();
    });
    it('should render request details field', () => {
      const renderAPI = render(<SubmitRequestScreen />);
      expect(renderAPI.queryByTestId('request-details-field')).not.toBeNull();
    });
    it('should render phone number field', () => {
      const renderAPI = render(<SubmitRequestScreen />);
      expect(renderAPI.queryByTestId('phone-number-field')).not.toBeNull();
    });
    it('should render zip code field', () => {
      const renderAPI = render(<SubmitRequestScreen />);
      expect(renderAPI.queryByTestId('zip-code-field')).not.toBeNull();
    });
    it('should render date field', () => {
      const renderAPI = render(<SubmitRequestScreen />);
      expect(renderAPI.queryByTestId('date-field')).not.toBeNull();
    });
    it('should call submitVolunteerRequest', async () => {
      const promise = Promise.resolve();
      VolunteerRequestService.submitVolunteerRequest = jest
        .fn()
        .mockReturnValue(promise);
      const renderAPI = render(
        <SubmitRequestScreen navigation={{navigate: jest.fn()}} />,
      );
      const button = renderAPI.getByTestId('submit-volunteer-request-button');

      fireEvent.press(button);

      expect(
        VolunteerRequestService.submitVolunteerRequest,
      ).toHaveBeenCalledWith({});

      await act(() => promise);
    });
  });
});
