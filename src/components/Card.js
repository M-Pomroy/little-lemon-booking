import "../styles/card.css";
import delivery_bike from "../assets/delivery-bike.svg";

const Card = ({ img, title, price, description }) => {
  return (
    <article className="card">
      <img src={img} alt={title} />
      <div className="card-body">
        <div className="card-heading">
          <h3>{title}</h3>
          <span className="card-price">£{price}</span>
        </div>
        <p>{description}</p>
        <button type="button" className="order-btn">
          Order a delivery
          <img src={delivery_bike} alt="A moped" />
        </button>
      </div>
    </article>
  );
};

export default Card;
