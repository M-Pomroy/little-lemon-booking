import "../styles/booking.css";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import About from "./About";
import BookingForm from "./BookingForm";

const Booking = (props) => {
  return (
    <>
      <Hero />
      <BookingForm times={props.times} dispatch={props.dispatch} />
      <Testimonials />
      <About />
    </>
  );
};

export default Booking;
