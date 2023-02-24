import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DescriptionIcon from '@material-ui/icons/Description';
import PaymentIcon from '@material-ui/icons/Payment';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import Navigation from './Navigation';
import Text from '../Text';

const DrawerItems = [
  { title: 'Documents', icon: <DescriptionIcon fontSize="medium" /> },
  { title: 'Billing', icon: <PaymentIcon fontSize="medium" /> },
  { title: 'Users', icon: <PeopleIcon fontSize="medium" /> },
  { title: 'Settings', icon: <SettingsIcon fontSize="medium" /> },
];

describe('Navigation', () => {
  test('it should render', () => {
    const mockToggleDrawer = jest.fn();

    render(
      <Navigation
        logoUrl="https://avatars.githubusercontent.com/u/19353311?v=4"
        logoAltText="Logo"
        showDrawer
        onToggleDrawer={mockToggleDrawer}
        userContent={
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text as="small">user@company.com</Text>
            <AccountCircleIcon fontSize="large" color="primary" />
          </div>
        }
        drawerContent={
          <React.Fragment>
            {DrawerItems.map(({ title, icon }) => (
              <ListItem button key={title}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            ))}
          </React.Fragment>
        }
      />
    );

    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByText('user@company.com')).toBeInTheDocument();

    DrawerItems.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });

    const drawerIcon = screen.getByTestId('drawerIcon');
    fireEvent.click(drawerIcon);
    expect(mockToggleDrawer).toHaveBeenCalled();
  });
});
