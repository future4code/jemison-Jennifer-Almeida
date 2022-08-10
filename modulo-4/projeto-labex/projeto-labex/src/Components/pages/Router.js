import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ListTripPages from './ListTripsPage';
import ApplicationFormPage from './ApplicationFormPage';
import LoginPage from './LoginPage';
import AdminHomePage from './AdminHomePage';
import CreateTripPage from './CreateTripPage'
import TripDetails from "./TripDetailsPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/list/trips" element={<ListTripPages/>} />
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
