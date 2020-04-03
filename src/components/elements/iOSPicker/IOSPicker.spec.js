import React from 'react';
import {render} from 'react-native-testing-library';
import {IOSPicker} from './IOSPicker';

describe('IOSPicker', () => {
  describe('by default', () => {
    it('should render label', () => {
      const renderAPI = render(
        <IOSPicker label={'label'} handleActionSheet={jest.fn()} />,
      );
      expect(renderAPI.queryByText('label')).not.toBeNull();
    });
    it('should render detailed label', () => {
      const renderAPI = render(
        <IOSPicker
          label={'label'}
          detailedLabel={'another label'}
          handleActionSheet={jest.fn()}
        />,
      );
      expect(renderAPI.queryByText('another label')).not.toBeNull();
    });
    it('should render value', () => {
      const renderAPI = render(
        <IOSPicker
          label={'label'}
          detailedLabel={'another label'}
          handleActionSheet={jest.fn()}
          placeholder={'Reimbursement method'}
          value={'crystal'}
        />,
      );
      expect(renderAPI.queryByText('crystal')).not.toBeNull();
    });
    it('should render placeholder', () => {
      const renderAPI = render(
        <IOSPicker
          label={'label'}
          detailedLabel={'another label'}
          handleActionSheet={jest.fn()}
          placeholder={'Reimbursement method'}
          value={null}
        />,
      );
      expect(renderAPI.queryByText('Reimbursement method')).not.toBeNull();
    });
  });
});
