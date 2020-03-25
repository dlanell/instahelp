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
    it('should render name field', () => {
      const renderAPI = render(<SubmitRequestScreen />);
      expect(renderAPI.getByTestId('name-field')).not.toBeNull();
    });
    it('should render request field', () => {
      const renderAPI = render(<SubmitRequestScreen />);
      expect(renderAPI.getByTestId('request-field')).not.toBeNull();
    });
    it('should render request details field', () => {
      const renderAPI = render(<SubmitRequestScreen />);
      expect(renderAPI.getByTestId('request-details-field')).not.toBeNull();
    });
    it('should render phone number field', () => {
      const renderAPI = render(<SubmitRequestScreen />);
      expect(renderAPI.getByTestId('phone-number-field')).not.toBeNull();
    });
    it('should render zip code field', () => {
      const renderAPI = render(<SubmitRequestScreen />);
      expect(renderAPI.getByTestId('zip-code-field')).not.toBeNull();
    });
  });
});
