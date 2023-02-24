import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AppBar from './AppBar';

describe('Navigation/AppBar', () => {
  test('it should render with defaults', () => {
    render(
      <AppBar
        logoUrl="https://avatars.githubusercontent.com/u/19353311?v=4"
        logoAltText="Logo"
      />
    );
    expect(screen.getByTestId('logoImage').getAttribute('src')).toEqual(
      'https://avatars.githubusercontent.com/u/19353311?v=4'
    );
    expect(screen.getByTestId('logoImage').getAttribute('alt')).toEqual('Logo');
  });

  test('it should render with drawer', () => {
    const mockDrawerToggle = jest.fn();

    render(
      <AppBar
        logoUrl="https://avatars.githubusercontent.com/u/19353311?v=4"
        logoAltText="Logo"
        showDrawer
        onToggleDrawer={mockDrawerToggle}
      />
    );

    const drawerIcon = screen.getByTestId('drawerIcon');
    fireEvent.click(drawerIcon);
    expect(drawerIcon.classList.contains('drawerOpen')).toBeTruthy();
    fireEvent.click(drawerIcon);
    expect(mockDrawerToggle).toHaveBeenCalledTimes(2);
  });

  test('it should render with user content', () => {
    const { container } = render(
      <AppBar
        logoUrl="https://avatars.githubusercontent.com/u/19353311?v=4"
        logoAltText="Logo"
        showDrawer
        onToggleDrawer={() => {}}
        userContent={<span data-testid="testContent">User Content</span>}
      />
    );

    const testContent = screen.getByTestId('testContent');
    expect(testContent.textContent).toEqual('User Content');
  });
});
