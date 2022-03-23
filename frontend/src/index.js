import React, { lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import PageIndex from './routes/index/PageIndex';
import ScrollToTop from './components/ScrollToTop';

// lazy-loaded components
const PageAbout = lazy(() => import('./routes/about/PageAbout'));
const PageTest = lazy(() => import('./routes/test/PageTest'));
const PageResults = lazy(() => import('./routes/results/PageResults'));
const PageNotFound = lazy(() => import('./routes/PageNotFound'));
const PageSubmit = lazy(() => import('./routes/submit/PageSubmit'));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<PageIndex />} />
          <Route path="about" element={<PageAbout />} />
          <Route path="test" element={<PageTest />} />
          <Route path="results" element={<PageResults />} />
          <Route path="submit" element={<PageSubmit />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
