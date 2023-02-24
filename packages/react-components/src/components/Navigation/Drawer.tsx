import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MDrawer from '@material-ui/core/Drawer';
import MToolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';

const DRAWER_WIDTH = 240;

interface DrawerStyleProps {
  drawerIsOpen: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: (props: DrawerStyleProps) =>
        props.drawerIsOpen ? DRAWER_WIDTH : '80px',
      flexShrink: 0,
      transition: 'width 500',
      [theme.breakpoints.only('sm')]: {
        width: (props: DrawerStyleProps) =>
          props.drawerIsOpen ? '150px' : '80px',
      },
      [theme.breakpoints.only('xs')]: {
        width: '100%',
        display: (props: DrawerStyleProps) =>
          props.drawerIsOpen ? 'block' : 'none',
      },
    },
    drawerPaper: {
      width: (props: DrawerStyleProps) =>
        props.drawerIsOpen ? DRAWER_WIDTH : '80px',
      transition: 'width 500',
      [theme.breakpoints.only('sm')]: {
        width: (props: DrawerStyleProps) =>
          props.drawerIsOpen ? '150px' : '80px',
      },
      [theme.breakpoints.only('xs')]: {
        width: '100%',
        display: (props: DrawerStyleProps) =>
          props.drawerIsOpen ? 'block' : 'none',
      },
    },
    drawerContainer: {
      overflow: 'auto',
      padding: '1rem',
    },
    drawerOpen: {
      width: DRAWER_WIDTH,
      transition: 'width 1s',
      [theme.breakpoints.only('sm')]: {
        width: '150px',
      },
      [theme.breakpoints.only('xs')]: {
        width: '100%',
      },
    },
  })
);

export interface DrawerProps {
  /**
   * Drawer content - can be JSX markup or simple html
   */
  drawerContent: React.ReactNode;
  /**
   * Determines whether to show drawer as open or closed
   */
  drawerIsOpen: boolean;
  /**
   * Optional classname to apply to Drawer for style overrides
   */
  className?: string;
}

export default function Drawer({
  className = undefined,
  drawerIsOpen = false,
  drawerContent = undefined,
}: DrawerProps) {
  const classes = useStyles({ drawerIsOpen });

  return (
    <MDrawer
      className={clsx(classes.drawer, { drawerOpen: drawerIsOpen }, className)}
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, { drawerOpen: drawerIsOpen }),
      }}
    >
      <MToolbar />
      <div
        className={clsx(
          classes.drawerContainer,
          {
            drawerOpen: drawerIsOpen,
            [`${className}-drawerContainer`]: !!className,
          },
          'drawerContainer'
        )}
      >
        {drawerContent}
      </div>
    </MDrawer>
  );
}
