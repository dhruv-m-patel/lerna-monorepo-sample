import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Page, StyleVariables } from '@dhruv-m-patel/react-components';

interface HomePageProps {
  getApiMessage: Function;
  messageFromApi?: string;
  isFetching: boolean;
  error?: string;
}

const useStyles = makeStyles(() => ({
  title: {
    color: StyleVariables.colors.blue,
  },
  loadingMessage: {
    color: StyleVariables.colors.darkGrey,
  },
  error: {
    color: StyleVariables.colors.red,
  },
}));

export default function HomePage({
  messageFromApi,
  isFetching = false,
  error,
  getApiMessage,
}: HomePageProps) {
  const classes = useStyles();
  const [message, setMessage] = useState<string | undefined>();

  useEffect(() => {
    if (!isFetching && !error && !messageFromApi) {
      getApiMessage();
    } else if (messageFromApi && !message) {
      setMessage(messageFromApi);
    }
  }, [messageFromApi, isFetching, error, message, getApiMessage]);

  return (
    <Page>
      <Typography variant="h1" className={classes.title}>
        Welcome to Starter App
      </Typography>
      {isFetching && (
        <Typography variant="h5" className={classes.loadingMessage}>
          Fetching message from API
        </Typography>
      )}
      {error ? (
        <Typography variant="h5" className={classes.error}>
          {error}
        </Typography>
      ) : (
        <Typography variant="h5">{message}</Typography>
      )}
    </Page>
  );
}
