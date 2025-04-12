import "../styles/main.css";
import Booking from "./Booking";
import Homepage from "./Homepage";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";
import BookingConfirmation from "./BookingConfirmation";
import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";

const submitAPI = function (formData) {
  return true;
};

const timesReducer = (state, action) => {
  let date = new Date(action);
  return fetchAPI(date);
};

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
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
