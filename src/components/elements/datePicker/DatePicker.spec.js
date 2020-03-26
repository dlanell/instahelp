import React from 'react';
import {fireEvent, render} from 'react-native-testing-library';
import {DatePicker} from './DatePicker';

describe('DatePicker', () => {
  describe('by default', () => {
    it('should render label', () => {
      const renderAPI = render(
        <DatePicker date={new Date()} setDateFn={jest.fn()} label={'yoda'} />,
      );

      expect(renderAPI.queryByText('yoda')).not.toBeNull();
    });
    it('should render date text field', () => {
      const date = new Date();
      const renderAPI = render(
        <DatePicker date={date} setDateFn={jest.fn()} label={'yoda'} />,
      );

      expect(
        renderAPI.queryByText(`${date.toString().substr(4, 12)}`),
      ).not.toBeNull();
    });
    it('should render date picker when text field is pressed', () => {
      const date = new Date();
      const dateString = date.toString().substr(4, 12);
      const renderAPI = render(
        <DatePicker date={date} setDateFn={jest.fn()} label={'yoda'} />,
      );
      const textField = renderAPI.getByText(dateString);

      fireEvent.press(textField);

      expect(renderAPI.queryByText('Done')).not.toBeNull();
    });
    it('should not render date picker when text field is not pressed', () => {
      const date = new Date();
      const renderAPI = render(
        <DatePicker date={date} setDateFn={jest.fn()} label={'yoda'} />,
      );

      expect(renderAPI.queryByText('Done')).toBeNull();
    });
  });
});
