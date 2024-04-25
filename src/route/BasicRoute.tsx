import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reservation from '../view/Reservation';
import WriteReservation from '../view/WriteReservation';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Reservation />} />
        <Route path="/write" element={<WriteReservation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
