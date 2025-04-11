import "../styles/about.css";
import mario_adrian from "../assets/mario-adrian.jpg";
import fish from "../assets/fish.jpg";

const About = () => {
  return (
    <section className="section">
      <div className="container container--860 about-wrap">
        <div class="about-text">
          <h2>Little Lemon</h2>
          <p className="subtitle subtitle--small">Chicago</p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
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
