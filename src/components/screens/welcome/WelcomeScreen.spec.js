import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import {WelcomeScreen} from './WelcomeScreen';
import {Screen} from '../../../navigation/screenConstants';

describe('WelcomeScreen', () => {
  describe('by default', () => {
    it('should render make a request button', () => {
      const renderAPI = render(<WelcomeScreen />);

      expect(renderAPI.getByTestId('make-a-request-button')).not.toBeNull();
    });
    it('should render browse request button', () => {
      const renderAPI = render(<WelcomeScreen />);

      expect(renderAPI.getByTestId('browse-requests-button')).not.toBeNull();
    });
    it('should render welcome text', () => {
      const renderAPI = render(<WelcomeScreen />);

      expect(renderAPI.getByTestId('welcome-title')).not.toBeNull();
      expect(renderAPI.getByTestId('welcome-text')).not.toBeNull();
    });
    it('should render welcome image', () => {
      const renderAPI = render(<WelcomeScreen />);

      expect(renderAPI.getByTestId('welcome-img')).not.toBeNull();
    });
    it('should navigate to submit request screen when make request button is pressed', () => {
      const mockNavigation = {navigate: jest.fn()};
      const renderAPI = render(<WelcomeScreen navigation={mockNavigation} />);

      const makeRequestButton = renderAPI.getByTestId('make-request-button');
      fireEvent.press(makeRequestButton);

      expect(mockNavigation.navigate).toHaveBeenCalledWith(
        Screen.SUBMIT_REQUEST,
      );
    });
  });
});
