import React from 'react';
import { Provider } from 'react-redux'; // Import Provider
import App from './App';
import './index.css';
import Modal from 'react-modal';
import { createRoot } from 'react-dom/client';
import store from './redux/store.js'; 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

Modal.setAppElement('#root');

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}> {/* Provide your Redux store */}
    <React.StrictMode>
      <App />
      <ToastContainer />
    </React.StrictMode>
  </Provider>
);
