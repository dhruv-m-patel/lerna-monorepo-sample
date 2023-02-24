import React from 'react';
import Drawer from './Drawer';
import DescriptionIcon from '@material-ui/icons/Description';
import PaymentIcon from '@material-ui/icons/Payment';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default {
  title: 'Components/Navigation/Drawer',
  component: Drawer,
};

export const withSimpleLinks = () => (
  <Drawer
    drawerIsOpen
    drawerContent={
      <React.Fragment>
        <a href="#">Documents</a>
        <br />
        <a href="#">Billing</a>
        <br />
        <a href="#">Users</a>
        <br />
        <a href="#">Settings</a>
      </React.Fragment>
    }
  />
);

export const withFancyItems = () => {
  const DrawerItems = [
    { title: 'Documents', icon: <DescriptionIcon fontSize="medium" /> },
    { title: 'Billing', icon: <PaymentIcon fontSize="medium" /> },
    { title: 'Users', icon: <PeopleIcon fontSize="medium" /> },
    { title: 'Settings', icon: <SettingsIcon fontSize="medium" /> },
  ];

  return (
    <Drawer
      drawerIsOpen
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
};
