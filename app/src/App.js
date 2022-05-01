import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CreateProfile from './screens/CreateProfile';

import Landing from './screens/Landing';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create-profile" element={<CreateProfile />} />
      </Routes>
    </React.Fragment>
  )
}