import React from 'react';
import {render} from 'react-native-testing-library';
import {SubmitRequestScreen} from './SubmitRequestScreen';

describe('SubmitRequestScreen', () => {
  describe('by default', () => {
    it('should render submit instructions', () => {
      const renderAPI = render(<SubmitRequestScreen />);
      expect(
        renderAPI.getByTestId('submit-request-instructions'),
      ).not.toBeNull();
    });
    it('should render whats your name field', () => {
      const renderAPI = render(<SubmitRequestScreen />);
      expect(renderAPI.getByTestId('name-field')).not.toBeNull();
    });
  });
});
