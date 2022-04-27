import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Landing from './screens/Landing';

export default function App() {
  return (
    <React.Fragment>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
    </React.Fragment>
  )
}