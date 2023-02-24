import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

interface StateDecoratorProps {
  initialState?: object;
  children?: ReactNode;
}

export default function StateDecorator({
  initialState,
  children,
}: StateDecoratorProps): JSX.Element {
  const store = configureStore(initialState);

  // @ts-ignore
  return <Provider store={store}>{children}</Provider>;
}
