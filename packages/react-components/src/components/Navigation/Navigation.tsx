import React, { useState, useEffect, useCallback } from 'react';
import AppBar from './AppBar';
import Drawer from './Drawer';

export interface NavigationProps {
  logoUrl: string;
  logoAltText: string;
  showDrawer: boolean;
  onToggleDrawer?: () => void;
  drawerOpen?: boolean;
  userContent?: React.ReactNode;
  appBarClassName?: string;
  drawerClassName?: string;
  drawerContent?: React.ReactNode;
}

export default function Navigation({
  logoUrl,
  logoAltText,
  showDrawer = false,
  onToggleDrawer,
  drawerOpen = false,
  userContent,
  appBarClassName = undefined,
  drawerClassName = undefined,
  drawerContent = undefined,
}: NavigationProps) {
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(drawerOpen);

  const handleDrawerToggle = useCallback(() => {
    setDrawerIsOpen((toggled) => !toggled);
    if (onToggleDrawer) {
      onToggleDrawer();
    }
  }, []);

  useEffect(() => {
    setDrawerIsOpen(drawerOpen);
  }, [drawerOpen]);

  return (
    <React.Fragment>
      <AppBar
        logoUrl={logoUrl}
        logoAltText={logoAltText}
        onToggleDrawer={handleDrawerToggle}
        drawerOpen={drawerIsOpen}
        showDrawer={showDrawer}
        userContent={userContent}
        className={appBarClassName}
      />
      {!!drawerContent && (
        <Drawer
          drawerIsOpen={drawerIsOpen}
          drawerContent={drawerContent}
          className={drawerClassName}
        />
      )}
    </React.Fragment>
  );
}
