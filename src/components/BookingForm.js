import "../styles/booking-form.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formValues, setFormValues] = useState({
    resDate: "",
    resTime: "",
    guests: "1",
    occasion: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (submitSuccess) {
      navigate("/booking-confirmed");
    }
  }, [submitSuccess, navigate]);

  const handleTimes = (date) => {
    return props.dispatch(date);
  };

  const handleSubmit = () => {
    setSubmitSuccess(props.submitAPI(formValues));
  };

  return (
    <section className="section section-margin-top">
      <div className="container container--530 booking-wrap">
        <h2>Booking a table</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="resDate">Choose date</label>
          <input
            type="date"
            id="resDate"
            name="resDate"
            value={formValues.resDate}
            onChange={(e) => {
              const value = e.target.value;
              setFormValues({ ...formValues, resDate: value });
              handleTimes(value);
            }}
            required
          />

          <label htmlFor="resTime">Choose time</label>
          <select
            id="resTime"
            name="resTime"
            onChange={(e) =>
              setFormValues({ ...formValues, resTime: e.target.value })
            }
            required
          >
            {props.times.map((time) => {
              return <option key={time}>{time}</option>;
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
            required
          />

          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formValues.occasion}
            onChange={(e) =>
              setFormValues({ ...formValues, occasion: e.target.value })
            }
            required
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>

          <button type="submit" className="btn">
            Make your reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
