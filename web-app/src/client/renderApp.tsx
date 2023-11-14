import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default function RenderApp() {
  const RootElement = document.getElementById('root') as HTMLElement;
  ReactDOM.hydrate(<App />, RootElement);
}
