import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './../pages/HomePage/HomePage'
import ListTripsPages from './ListTripsPage/ListTripsPage'
import ApplicationFormPage from './../../ApplicationFormPage/ApplicationFormPage';
import LoginPage from './LoginPage/LoginPage'
import AdminHomePage from './../pages/AdminHomePage/AdminHomePage'
import CreateTripPage from './CreateTripPage/CreateTripPage'
import TripDetails from './TripDetailsPage/TripDetailsPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/list/trips" element={<ListTripsPages/>} />
        <Route path="/trips/application" element={<ApplicationFormPage/>} />
        <Route path="/login" element={<LoginPage/>} /> 
        <Route path="/admin/trips/list" element={<AdminHomePage/>} /> 
        <Route path="/admin/trips/create" element={<CreateTripPage/>} />  
        <Route path="/admin/trips/:id" element={<TripDetails/>} /> 

      </Routes>

    </BrowserRouter>
  );
}

export default Router;
