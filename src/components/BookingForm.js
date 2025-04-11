import "../styles/booking-form.css";
import { useState } from "react";

const BookingForm = () => {
  const [formValues, setFormValues] = useState({
    resDate: "",
    resTime: "",
    guests: "1",
    occasion: "",
  });

  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  return (
    <form className="form">
      <label htmlFor="resDate">Choose date</label>
      <input
        type="date"
        id="resDate"
        name="resDate"
        value={formValues.resDate}
        onChange={(e) =>
          setFormValues({ ...formValues, resDate: e.target.value })
        }
      />

      <label htmlFor="resTime">Choose time</label>
      <select
        id="resTime"
        name="resTime"
        onChange={(e) =>
          setFormValues({ ...formValues, resTime: e.target.value })
        }
      >
        {availableTimes.map((time) => {
          return <option>{time}</option>;
        })}
      </select>

      <label htmlFor="guests">Number of quests</label>
      <input
        type="number"
        value={formValues.guests}
        min="1"
        max="10"
        id="guests"
        name="guests"
        onChange={(e) =>
          setFormValues({ ...formValues, guests: e.target.value })
        }
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formValues.occasion}
        onChange={(e) =>
          setFormValues({ ...formValues, occasion: e.target.value })
        }
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit" className="btn">
        Make your reservation
      </button>
    </form>
  );
};

export default BookingForm;
