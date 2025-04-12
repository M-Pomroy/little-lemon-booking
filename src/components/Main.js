import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import Booking from "./Booking";
import Homepage from "./Homepage";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";
import BookingConfirmation from "./BookingConfirmation";
import { fetchAPI, submitAPI } from "../api/formApi";
import "../styles/main.css";

const timesReducer = (state, action) => {
  let date = new Date(action);
  return fetchAPI(date);
};

const today = new Date();
const initialTimes = fetchAPI(today);

const Main = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, initialTimes);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route
        path="/booking"
        element={
          <Booking
            times={availableTimes}
            dispatch={dispatch}
            submitAPI={submitAPI}
          />
        }
      />
      <Route path="/booking-confirmed" element={<BookingConfirmation />} />
    </Routes>
  );
};

export default Main;
