import "./Banner.css"

export default function Banner({ image, title }) {
  return (
    <div className="banner">
      <img src={image} alt="bannière" />
      {title && <h1>{title}</h1>}
    </div>
  );
}
