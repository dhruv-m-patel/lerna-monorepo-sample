import React from 'react';
import { action } from '@storybook/addon-actions';
import AppBar from './AppBar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Text from '../Text';

export default {
  title: 'Components/Navigation/AppBar',
  component: AppBar,
};

export const withDefaults = () => (
  <AppBar
    logoUrl="https://avatars.githubusercontent.com/u/19353311?v=4"
    logoAltText="Logo"
  />
);

export const withDrawer = () => (
  <AppBar
    logoUrl="https://avatars.githubusercontent.com/u/19353311?v=4"
    logoAltText="Logo"
    showDrawer
    onToggleDrawer={action('Toggle Drawer')}
  />
);

export const withDrawerAndUserContent = () => (
  <AppBar
    logoUrl="https://avatars.githubusercontent.com/u/19353311?v=4"
    logoAltText="Logo"
    showDrawer
    onToggleDrawer={action('Toggle Drawer')}
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
  />
);
