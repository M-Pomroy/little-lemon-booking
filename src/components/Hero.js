import "../styles/hero.css";
import food_hero from "../assets/food-hero.jpg";

const Hero = () => {
  return (
    <section className="section section-green hero">
      <div className="container container--860 hero-wrap">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <p className="subtitle">Chicago</p>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button type="button" className="btn">
            Reserve a table
          </button>
        </div>
        <div className="hero-img">
          <img
            src={food_hero}
            alt="Four baguettes on a slate plate being carried by a chef wearing a grey apron"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
