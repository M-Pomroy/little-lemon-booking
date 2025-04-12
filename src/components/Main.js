import "../styles/main.css";
import Booking from "./Booking";
import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";

const timesReducer = (state, action) => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const initialTimes = [];

const Main = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, initialTimes);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/booking"
        element={<Booking times={availableTimes} dispatch={dispatch} />}
      />
    </Routes>
  );
};

export default Main;
