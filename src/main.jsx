import React from 'react';
import { Provider } from 'react-redux'; // Import Provider
import App from './App';
import './index.css';
import Modal from 'react-modal';
import { createRoot } from 'react-dom/client';
import store from './redux/store.js'; // Import your Redux store

Modal.setAppElement('#root');

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}> {/* Provide your Redux store */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
