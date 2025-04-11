import "../styles/testimonials.css";
import Testimonial from "../components/Testimonial";

const Testimonials = () => {
  return (
    <section className="section section-yellow">
      <div className="container container--860 testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-wrap">
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
