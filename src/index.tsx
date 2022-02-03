import React from 'react';
import ReactDOM from 'react-dom';
import { SignIn, SignUp } from 'pages';
import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);