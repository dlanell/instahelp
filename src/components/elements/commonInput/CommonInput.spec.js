import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import {CommonInput} from './CommonInput';

describe('CommonInput', () => {
  describe('by default', () => {
    it('should render label', () => {
      const renderAPI = render(
        <CommonInput
          onChangeText={jest.fn()}
          label={'yoda'}
          placeholder={''}
          value={''}
        />,
      );

      expect(renderAPI.getByText('yoda')).not.toBeNull();
    });
    it('should render placeholder', () => {
      const renderAPI = render(
        <CommonInput
          onChangeText={jest.fn()}
          label={''}
          placeholder={'windu'}
          value={''}
        />,
      );

      expect(renderAPI.getByPlaceholder('windu')).not.toBeNull();
    });
    it('should render value', () => {
      const renderAPI = render(
        <CommonInput
          onChangeText={jest.fn()}
          label={''}
          placeholder={''}
          value={'windu'}
        />,
      );

      expect(renderAPI.getByDisplayValue('windu')).not.toBeNull();
    });
    it('should fire onChangeText', () => {
      const mockChangetext = jest.fn();
      const renderAPI = render(
        <CommonInput
          onChangeText={mockChangetext}
          label={''}
          placeholder={''}
          value={'windu'}
        />,
      );

      const input = renderAPI.getByDisplayValue('windu');
      fireEvent.changeText(input, 'anakin')

      expect(mockChangetext).toHaveBeenCalledWith('anakin');
    });
  });
});
