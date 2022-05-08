import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CreateProfile from './screens/CreateProfile';

import 'react-toastify/dist/ReactToastify.css';

import Landing from './screens/Landing';
import AddPhotos from './screens/AddPhotos';
import Explore from './screens/Explore';

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
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </React.Fragment>
  )
}