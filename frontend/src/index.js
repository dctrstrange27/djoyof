import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//473737215172-vvetfrobe1mvoc6d4t9ei8po9am1hllh.apps.googleusercontent.com
ReactDOM.render(
  <>
    <GoogleOAuthProvider clientId="473737215172-vvetfrobe1mvoc6d4t9ei8po9am1hllh.apps.googleusercontent.com">
      <App/>
      <ToastContainer  limit={5} />
      </GoogleOAuthProvider>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
