import React from 'react';
import { render, screen } from '@testing-library/react';
import Drawer from './Drawer';

describe('Navigation/Drawer', () => {
  test('it should render', () => {
    render(
      <Drawer
        drawerIsOpen
        drawerContent={
          <React.Fragment>
            <a href="#" data-testid="testLink">
              Documents
            </a>
          </React.Fragment>
        }
      />
    );

    const testLink = screen.getByTestId('testLink');
    expect(testLink.textContent).toEqual('Documents');
  });

  test('it should render with closed drawer', () => {
    render(
      <Drawer
        drawerIsOpen={false}
        drawerContent={
          <React.Fragment>
            <a href="#" data-testid="testLink">
              Documents
            </a>
          </React.Fragment>
        }
      />
    );

    const testLink = screen.getByTestId('testLink');
    expect(testLink.textContent).toEqual('Documents');
  });
});
