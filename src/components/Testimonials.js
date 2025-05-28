import "../styles/testimonials.css";
import Testimonial from "../components/Testimonial";
import janeDoe from "../assets/jane-doe.jpg";
import johnSmith from "../assets/john-smith.jpg";
import kathyWilkins from "../assets/kathy-wilkins.jpg";
import elizabeth from "../assets/elizabeth.jpg";

const testimonials = [
  {
    id: 0,
    img: janeDoe,
    rating: "5.0",
    author: "Jane Doe",
    review:
      "Fantastic food, and the wait staff were great! We had a mix-up on the mains but they sorted it without issue.",
  },
  {
    id: 1,
    img: johnSmith,
    rating: "4.5",
    author: "John Smith",
    review: "Great atmosphere with lovely staff",
  },
  {
    id: 2,
    img: kathyWilkins,
    rating: "5.0",
    author: "Kathy Wilkins",
    review: "Easily the best Greek salad I've ever had!",
  },
  {
    id: 3,
    img: elizabeth,
    rating: "4.0",
    author: "Elizabeth",
    review:
      "Celebrated my 50th birthday here. Got a free cocktail, which was lovely. The food was great, but they were out of the salad!",
  },
];

const Testimonials = () => {
  return (
    <section className="section section-yellow">
      <div className="container container--860 testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-wrap">
          {testimonials?.map((testimonial) => {
            return <Testimonial key={testimonial.id} {...testimonial} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
