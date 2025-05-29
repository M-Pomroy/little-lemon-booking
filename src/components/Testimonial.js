import "../styles/testimonial.css";

const Testimonial = ({ img, rating, author, review }) => {
  return (
    <article className="testimonial">
      <h3>{rating} Stars</h3>
      <div className="testimonial-author">
        <img src={img} alt={author} />
        <p>{author}</p>
      </div>
      <p>{review}</p>
    </article>
  );
};

export default Testimonial;
