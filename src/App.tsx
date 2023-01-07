import React, {Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './traditional/Home/Home'
// import './App.css';

const OS = lazy(() => import('./creative/OS'))

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creative" element={<OS />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
