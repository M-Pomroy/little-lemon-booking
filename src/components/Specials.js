import "../styles/specials.css";
import Card from "./Card";
import greek_salad from "../assets/greek-salad.jpg";
import bruschetta from "../assets/bruschetta.jpg";
import lemon_dessert from "../assets/lemon-dessert.jpg";

const specials = [
  {
    id: 0,
    img: greek_salad,
    title: "Greek Salad",
    price: "12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
  },
  {
    id: 1,
    img: bruschetta,
    title: "Bruschetta",
    price: "5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
  },
  {
    id: 2,
    img: lemon_dessert,
    title: "Lemon Dessert",
    price: "5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
  },
];

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
          {specials?.map((special) => {
            return <Card key={special.id} {...special} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Specials;
