import "../styles/booking-confirmation.css";
import About from "./About";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

const BookingConfirmation = () => {
  return (
    <>
      <Hero />
      <section className="section">
        <div className="container container--860 booking-confirmed">
          <h2>Booking confirmed!</h2>
        </div>
      </section>
      <Testimonials />
      <About />
    </>
  );
};

export default BookingConfirmation;
