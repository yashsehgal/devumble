import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CreateProfile from './screens/CreateProfile';

import 'react-toastify/dist/ReactToastify.css';

import Landing from './screens/Landing';
import AddPhotos from './screens/AddPhotos';

export default function App() {
  const [isLoogedInRef, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn'));
  })
  return (
    <React.Fragment>
      <Header HEADER_STATE={isLoogedInRef ? 'logged-in': 'logged-out'} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/upload-photos" element={<AddPhotos />} />
      </Routes>
    </React.Fragment>
  )
}