import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import PageIndex from './routes/index/PageIndex';
import PageAbout from './routes/about/PageAbout';
import PageTest from './routes/test/PageTest';
import PageResults from './routes/results/PageResults';
import PageNotFound from './routes/PageNotFound';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<PageIndex />} />
        <Route path="about" element={<PageAbout />} />
        <Route path="test" element={<PageTest />} />
        <Route path="results" element={<PageResults />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
