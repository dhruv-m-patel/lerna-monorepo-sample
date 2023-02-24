import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Page, Text, StyleVariables } from '@dhruv-m-patel/react-components';

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
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardAnchorLink: {
    margin: '1rem',
    padding: '1rem',
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
    border: `2px solid ${StyleVariables.colors.darkGrey}`,
    borderRadius: '10px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
    width: '45%',
    height: '180px',
    '&:hover, &:focus, &:active': {
      borderColor: StyleVariables.colors.blue,
    },
    '& h2': {
      margin: '0 0 1rem 0',
      fontSize: '1.5rem',
    },
    '& p': {
      margin: 0,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
  },
  description: {
    lineHeight: '1.5rem',
    fontSize: '1.5rem',
    textAlign: 'center',
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '800px',
    marginTop: '3rem',
    '& a > h2': {
      color: StyleVariables.colors.blue,
    },
  },
  titleH1: {
    margin: 0,
    lineHeight: 1.15,
    fontSize: '4rem',
    textAlign: 'center',
    '& a': {
      textDecoration: 'none',
    },
    '& a:hover, & a:focus, & a:active': {
      textDecoration: 'underline',
    },
  },
  titleH2: {
    margin: '0 0 1.5rem',
    lineHeight: 1.15,
    fontSize: '2rem',
    textAlign: 'center',
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <Page>
      <div className={classes.main}>
        <Text as="h1" className={classes.titleH1}>
          Welcome to Node React Monorepo
        </Text>
        <br />
        <br />
        <Text as="p" className={classes.description}>
          Featured with reach support of modern tools to build your Node React
          projects
        </Text>

        <div className={classes.grid}>
          <a
            className={classes.cardAnchorLink}
            href="https://www.npmjs.com/package/redux-api-middleware"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Text as="h2">Monorepo</Text>
            <Text as="p">
              Manage your frontend, backend and packages in one place with Lerna
            </Text>
          </a>

          <a
            className={classes.cardAnchorLink}
            href="https://expressjs.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Text as="h2">Express</Text>
            <Text as="p">Write microservices with node and express</Text>
          </a>

          <a
            className={classes.cardAnchorLink}
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Text as="h2">React</Text>
            <Text as="p">
              Write frontend applications using React (extended with SSR support
              built-in)
            </Text>
          </a>

          <a
            className={classes.cardAnchorLink}
            href="https://reactrouter.com/web/guides/quick-start"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Text as="h2">React Router</Text>
            <Text as="p">
              Multi-page applications support with client-side routing using
              react-router-dom
            </Text>
          </a>

          <a
            className={classes.cardAnchorLink}
            href="https://www.npmjs.com/package/confit"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Text as="h2">Configuration</Text>
            <Text as="p">
              Hydrate dynamic configuration relevant to different environments
            </Text>
          </a>

          <a
            className={classes.cardAnchorLink}
            href="https://styled-components.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Text as="h2">Styled Components</Text>
            <Text as="p">Style your React components with a breeze</Text>
          </a>

          <a
            className={classes.cardAnchorLink}
            href="https://redux.js.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Text as="h2">Redux</Text>
            <Text as="p">Manage your application state with Redux</Text>
          </a>

          <a
            className={classes.cardAnchorLink}
            href="https://www.npmjs.com/package/redux-api-middleware"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Text as="h2">Redux API Middleware</Text>
            <Text as="p">
              Call server apis with ease using redux-api-middleware.
            </Text>
          </a>

          <a
            className={classes.cardAnchorLink}
            href="https://storybook.js.org/docs/react/get-started/introduction"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Text as="h2">Storybook</Text>
            <Text as="p">Visualize your react components using Storybook</Text>
          </a>

          <a
            className={classes.cardAnchorLink}
            href="https://enzymejs.github.io/enzyme/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Text as="h2">Jest + Enzyme</Text>
            <Text as="p">Test your react components using Jest and Enzyme</Text>
          </a>
        </div>
        <br />
        <br />
        <Text as="h2" className={classes.titleH2}>
          Frontend References
        </Text>
        <ul>
          <li>
            <a
              href="https://github.com/dhruv-m-patel/node-react-monorepo/blob/master/apps/react-app/src/server/middleware/renderPage.tsx"
              target="_blank"
              rel="noreferrer noopener"
            >
              React SSR Middleware
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dhruv-m-patel/node-react-monorepo/blob/master/apps/react-app/src/client/renderApp.tsx"
              target="_blank"
              rel="noreferrer noopener"
            >
              Client App Entrypoint
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dhruv-m-patel/node-react-monorepo/tree/master/apps/react-app/src/client/redux"
              target="_blank"
              rel="noreferrer noopener"
            >
              Redux Integration
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dhruv-m-patel/node-react-monorepo/blob/master/apps/react-app/src/client/redux/actions.ts#L37"
              target="_blank"
              rel="noreferrer noopener"
            >
              Example server api call with redux-api-middleware
            </a>
          </li>
        </ul>
      </div>
    </Page>
  );
}
