import "../styles/testimonial.css";
import testimonial_img from "../assets/testimonial-img.jpg";

const Testimonial = () => {
  return (
    <article className="testimonial">
      <h3>5.0 Stars</h3>
      <div className="testimonial-author">
        <img src={testimonial_img} alt="Jane Doe" />
        <p>Jane Doe</p>
      </div>
      <p>
        Fantastic food, and the wait staff were great! We had a mix-up on the
        mains but they sorted it no issue.
      </p>
    </article>
  );
};

export default Testimonial;
