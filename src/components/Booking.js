import "../styles/booking.css";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import About from "./About";
import BookingForm from "./BookingForm";

const Booking = () => {
  return (
    <>
      <Hero />
      <section className="section section-margin-top">
        <div className="container container--530 booking-wrap">
          <h2>Booking details</h2>
          <BookingForm />
        </div>
      </section>
      <Testimonials />
      <About />
    </>
  );
};

export default Booking;
