import React from 'react';
import {render} from 'react-native-testing-library';
import {Label} from './Label';

describe('Label', () => {
  describe('by default', () => {
    it('should render label', () => {
      const renderAPI = render(<Label label={'yoda'} />);
      expect(renderAPI.queryByText('yoda')).not.toBeNull();
    });
    it('should render detailed label when detailed label is present', () => {
      const renderAPI = render(
        <Label label={'yoda'} detailedLabel={'windu'} />,
      );
      expect(renderAPI.queryByText('windu')).not.toBeNull();
    });
    it('should not render detailed label when detailed label is not present', () => {
      const renderAPI = render(<Label label={'yoda'} />);
      expect(renderAPI.queryByText('windu')).toBeNull();
    });
    it('should render required asterisk when required', () => {
      const renderAPI = render(
        <Label label={'yoda'} detailedLabel={'windu'} required={true} />,
      );
      expect(renderAPI.queryByText('*')).not.toBeNull();
    });
    it('should not render required asterisk when not required', () => {
      const renderAPI = render(
        <Label label={'yoda'} detailedLabel={'windu'} />,
      );
      expect(renderAPI.queryByText('*')).toBeNull();
    });
  });
});
