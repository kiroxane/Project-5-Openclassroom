import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import Hero from "../../assets/Hero.png";

export default function Home() {
  return (
    <div className="home">
      <Banner
        image={Hero}
        title={
          <>
            Chez vous,<br className="break-mobile" /> partout et ailleurs
          </>
        }
      />
      <Gallery />
    </div>
  );
}
