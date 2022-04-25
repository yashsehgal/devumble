import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from './screens/Landing';

export default function App() {
  return (
    <React.Fragment>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
    </React.Fragment>
  )
}