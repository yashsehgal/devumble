import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CreateProfile from './screens/CreateProfile';

import 'react-toastify/dist/ReactToastify.css';

import Landing from './screens/Landing';
import AddPhotos from './screens/AddPhotos';
import Explore from './screens/Explore';
import { getLoggedInStatus_fromLocalStorage } from './utils/local-storage';
import CompulsoryAuthModal from './components/CompulsoryAuthModal';

export default function App() {
  const [isLoogedInRef, setIsLoggedIn] = useState(false);
  const [authModalRef, setAuthModal] = useState(false);

  let _currentLoggedInStatus = getLoggedInStatus_fromLocalStorage();
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn'));
  }, [_currentLoggedInStatus]);

  // for showing login feature while going to other pages if not logged in
  // this use-effect hook will manage the logged-in state and redirect to "/"
  // or home page if not logged-in
  useEffect(() => {
    console.log('rendering auth modal for logging in');
    !getLoggedInStatus_fromLocalStorage() && (window.location.toString() === '/') 
      ? setAuthModal(true) 
      : setAuthModal(false);
  }, [_currentLoggedInStatus]);

  return (
    <React.Fragment>
      {authModalRef ? <CompulsoryAuthModal /> : <React.Fragment></React.Fragment>}
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