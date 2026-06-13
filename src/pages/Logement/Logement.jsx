import { useParams, Navigate } from "react-router-dom"
import logements from "../../data/logements.json"
import Collapse from "../../components/Collapse/Collapse"
import "./Logement.css"
import Carrousel from  "../../components/Carrousel/Carrousel"
function Rating({ note }) {
    return (
      <div className="rating">
        {[1, 2, 3, 4, 5].map((n) => (
          <i
            key={n}
            className="fa-solid fa-star"
            style={{ color: n <= note ? "#FF6060" : "#E3E3E3" }}
          ></i>
        ))}
      </div>
    )
  }

    export default function Logement() {
      const { id } = useParams()
      const logement = logements.find((l) => l.id === id)

      // id inexistant → on redirige vers la page 404
      if (!logement) {
        return <Navigate to="/404" replace />
      }

    return (
     
     <div className="logement">
      <Carrousel pictures={logement.pictures} />
      <div className="infos-header">
        <div className="infos-left">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="infos-right">
          <div className="host">
            <span>{logement.host.name}</span>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <Rating note={Number(logement.rating)} />
        </div>
      </div>

       <div className="collapses">
        <Collapse title="Description">
          {logement.description}
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipement) => (
              <li key={equipement}>{equipement}</li>
            ))}
          </ul>
        </Collapse>
       </div>

    </div>)
    
    
    }