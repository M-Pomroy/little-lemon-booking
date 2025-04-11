import "../styles/specials.css";
import Card from "./Card";

const Specials = () => {
  return (
    <section className="section">
      <div className="container container--860">
        <div className="specials-heading">
          <h2>This weeks specials!</h2>
          <button type="button" className="btn">
            Online Menu
          </button>
        </div>
        <div className="specials-wrap">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Specials;
