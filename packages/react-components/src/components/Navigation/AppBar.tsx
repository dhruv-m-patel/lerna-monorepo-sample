import React, { useState, useEffect, useCallback } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MAppBar from '@material-ui/core/AppBar';
import MToolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Image from '../Image';
import { StyleVariables } from '../../styles/variables';

interface AppBarStyleProps {
  drawerOpen: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: StyleVariables.colors.white,
      maxHeight: '80px',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: StyleVariables.colors.darkGrey,
      transform: (props: AppBarStyleProps) =>
        props.drawerOpen ? 'rotate(90deg)' : 'rotate(0)',
    },
    drawerOpen: {
      transform: 'rotate(90deg)',
    },
    appBarContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1,
    },
    logo: {
      '& img': {
        maxWidth: '150px',
      },
    },
    userContent: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: StyleVariables.colors.black,
    },
  })
);

export interface AppBarProps {
  logoUrl: string;
  logoAltText: string;
  showDrawer?: boolean;
  onToggleDrawer?: () => void;
  drawerOpen?: boolean;
  userContent?: React.ReactNode;
  className?: string;
}

export default function AppBar({
  logoUrl,
  logoAltText,
  showDrawer = false,
  onToggleDrawer,
  drawerOpen = false,
  userContent,
  className = undefined,
}: AppBarProps) {
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(drawerOpen);
  const classes = useStyles({ drawerOpen: showDrawer && drawerIsOpen });

  useEffect(() => {
    setDrawerIsOpen(drawerOpen);
  }, [drawerOpen]);

  const handleToggleDrawer = useCallback(() => {
    setDrawerIsOpen((toggled) => !toggled);
    if (onToggleDrawer) {
      onToggleDrawer();
    }
  }, [onToggleDrawer]);

  return (
    <MAppBar position="fixed" className={clsx(classes.appBar, className)}>
      <MToolbar>
        {showDrawer && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleToggleDrawer}
            edge="start"
            className={clsx(classes.menuButton, {
              drawerOpen: drawerIsOpen,
              [`${className}-drawerButton`]: !!className,
            })}
            data-testid="drawerIcon"
          >
            <MenuIcon />
          </IconButton>
        )}
        <div className={classes.appBarContent}>
          <div
            className={clsx(classes.logo, {
              [`${className}-logo`]: !!className,
            })}
          >
            <Image data-testid="logoImage" src={logoUrl} alt={logoAltText} />
          </div>
          {!!userContent && (
            <div
              className={clsx(classes.userContent, {
                [`${className}-userContent`]: !!className,
              })}
            >
              {userContent}
            </div>
          )}
        </div>
      </MToolbar>
    </MAppBar>
  );
}
