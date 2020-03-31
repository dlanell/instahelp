import React from 'react';
import {render} from 'react-native-testing-library';
import {BrowseRequestsScreen} from './BrowseRequestsScreen';

describe('BrowseRequestsScreen', () => {
  describe('by default', () => {
    it('should render page details', () => {
      const renderAPI = render(
        <BrowseRequestsScreen navigation={{addListener: jest.fn()}} />,
      );
      expect(renderAPI.queryByTestId('browse-requests-details')).not.toBeNull();
    });
  });
});
