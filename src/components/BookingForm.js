import "../styles/booking-form.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {
  const [canSubmit, setCanSubmit] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formValues, setFormValues] = useState({
    resDate: "",
    resTime: "",
    guests: "1",
    occasion: "",
  });

  const handleDateChange = (e) => {
    const value = e.target.value;

    const today = new Date();
    const todaysDate = today.toDateString();

    const selectedDate = new Date(value);
    const selectedDatesDate = selectedDate.toDateString();

    if (selectedDatesDate < todaysDate) {
      alert("Invalid date - please select a date in the future");
      setFormValues({ ...formValues, resDate: "" });
    } else {
      setFormValues({ ...formValues, resDate: value });
      handleTimes(value);
    }
  };

  const handleTimeChange = (e) => {
    const value = e.target.value;
    const today = new Date();
    const todaysDate = today.toDateString();

    let selectedDate;
    let selectedDatesDate;
    if (formValues.resDate) {
      selectedDate = new Date(formValues.resDate);
      selectedDatesDate = selectedDate.toDateString();
    }

    if (selectedDatesDate === todaysDate) {
      const currentTime = today.getHours() + ":" + today.getMinutes();

      if (value <= currentTime) {
        alert("Invalid time - please select a time in the future");
        setFormValues({ ...formValues, resTime: "" });
      } else {
        setFormValues({ ...formValues, resTime: value });
      }
    } else {
      setFormValues({ ...formValues, resTime: value });
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (submitSuccess) {
      navigate("/booking-confirmed");
    }

    if (
      formValues.resDate !== "" &&
      formValues.resTime !== "" &&
      formValues.occasion !== ""
    ) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [submitSuccess, navigate, formValues]);

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
            onChange={(e) => handleDateChange(e)}
            required
          />

          <label htmlFor="resTime">Choose time</label>
          <select
            id="resTime"
            name="resTime"
            onChange={(e) => handleTimeChange(e)}
            required
          >
            <option value="">Please select a time</option>
            {props.times.map((time) => {
              return (
                <option key={time} value={time}>
                  {time}
                </option>
              );
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
            <option value="">Please select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>

          <button type="submit" className="btn" disabled={!canSubmit}>
            Make your reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
