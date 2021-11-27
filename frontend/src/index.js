import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';
import About from './routes/About';
import Test from './routes/Test';
import Results from './routes/Results.js';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="test" element={<Test />} />
        <Route path="results" element={<Results />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
