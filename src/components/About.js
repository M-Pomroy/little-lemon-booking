import "../styles/about.css";
import mario_adrian from "../assets/mario-adrian.jpg";
import fish from "../assets/fish.jpg";

const About = ({ margin = false }) => {
  return (
    <section className={`section ${margin ? "section-margin-top" : ""} `}>
      <div className="container container--860 about-wrap">
        <div className="about-text">
          <h2>Little Lemon</h2>
          <p className="subtitle subtitle--small">Chicago</p>
          <p>
            Based in Chicago, Illinois, Little Lemon is a family-owned
            Mediterranean restaurant, focused on traditional recipes served with
            a modern twist.
          </p>
          <p>
            The chefs draw inspiration from Italian, Greek, and Turkish culture
            and have a menu of 12–15 items that they rotate seasonally. The
            restaurant has a rustic and relaxed atmosphere with moderate prices,
            making it a popular place for a meal any time of the day.
          </p>
        </div>
        <div className="about-img-wrap">
          <img
            src={mario_adrian}
            alt="Mario and Adrian - the owners of Little Lemon"
            className="about-img-right"
          />
          <img
            src={fish}
            alt="Fish cooking on a grill with tomatoes, potatoes, and a slice of lemon"
            className="about-img-left"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
