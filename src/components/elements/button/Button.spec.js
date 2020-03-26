import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import {Button, ButtonStyleEnum} from './Button';

describe('Button', () => {
  it('should render text', () => {
    const renderAPI = render(
      <Button
        text={'hello'}
        buttonStyle={ButtonStyleEnum.PRIMARY}
        onPress={jest.fn()}
      />,
    );

    expect(renderAPI.queryByText('hello')).not.toBeNull();
  });
  it('should call on press when pressed', () => {
    const mockFunction = jest.fn();
    const renderAPI = render(
      <Button
        text={'hello'}
        testID={'testID'}
        buttonStyle={ButtonStyleEnum.PRIMARY}
        onPress={mockFunction}
      />,
    );

    const button = renderAPI.queryByTestId('testID');
    fireEvent.press(button);

    expect(mockFunction).toHaveBeenCalled();
  });
});
