import Image from '../../assets/Carrousel.png'
import Title from './Title.jsx'
import Aside from './Aside.jsx'
import Buttonshort from './Buttonshort.jsx'
import Buttonwide from './Buttonwide.jsx'
import './Logement.css'

function Rating({ note }) {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((n) => (
        <i
          key={n}
          className="fa-solid fa-star"
          style={{ color: n <= note ? '#FF6060' : '#E3E3E3' }}
        ></i>
      ))}
    </div>
  );
}

export default function Logement() {
  return (
    <>
      <img src={Image} alt="Photo d'un appartement" />
      <div className="contentBeforeMain">
        <Title />
        <div className="bloc-droit">
          <Aside />
          <Rating note={4} />
        </div>
      </div>
      <Buttonshort />
      <Buttonwide />
    </>
  );
}
