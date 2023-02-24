import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

describe('HomePage', () => {
  test('it should render', () => {
    render(
      <MemoryRouter>
        <HomePage
          messageFromApi="Hello World!"
          isFetching={false}
          error={undefined}
          getApiMessage={() => {}}
        />
      </MemoryRouter>
    );
    expect(screen.getByText(/Hello World/)).toBeInTheDocument();
  });
});
