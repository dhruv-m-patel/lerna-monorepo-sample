import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from './Image';

const TEST_IMAGE = 'https://avatars.githubusercontent.com/u/19353311';

describe('Image', () => {
  test('it should render image by default', () => {
    render(<Image data-testid="image" src={TEST_IMAGE} alt="Test image" />);
    expect(screen.getByTestId('image').getAttribute('src')).toBe(TEST_IMAGE);
  });

  test('it should render empty image with lazy loading turned on', () => {
    render(<Image data-testid="image" src={TEST_IMAGE} alt="Big image" lazy />);
    expect(screen.getByTestId('image').getAttribute('src')).toBe('');
  });
});
