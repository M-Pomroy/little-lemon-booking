import "../styles/card.css";
import greek_salad from "../assets/greek-salad.jpg";
import delivery_bike from "../assets/delivery-bike.svg";

const Card = () => {
  return (
    <article className="card">
      <img src={greek_salad} alt="A greek salad" />
      <div className="card-body">
        <div className="card-heading">
          <h3>Greek salad</h3>
          <span className="card-price">£12.99</span>
        </div>
        <p>
          The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons
        </p>
        <button type="button" className="order-btn">
          Order a deliver
          <img src={delivery_bike} alt="A moped" />
        </button>
      </div>
    </article>
  );
};

export default Card;
