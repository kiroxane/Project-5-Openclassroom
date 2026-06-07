import image from "../../assets/Hero.png"
import "./Banner.css"
export default function Banner() {
  return (
    <div className="banner">
      <img src={image} alt="immage d'un paysage" />
      <h1>Chez vous,partout et ailleurs</h1>
    </div>
  );
}
