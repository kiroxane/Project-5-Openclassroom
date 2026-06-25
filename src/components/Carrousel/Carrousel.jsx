import { useState } from "react"
import "./Carrousel.scss"

  export default function Carrousel({ pictures }) {
    const [current, setCurrent] = useState(0)
    const next = () => {
      setCurrent(current === pictures.length - 1 ? 0 : current + 1)
    }

    const prev = () => {
      setCurrent(current === 0 ? pictures.length - 1 : current - 1)
    }


    return (
        
       <div className="carrousel">
      {pictures.length > 1 && (
        <i className="fa-solid fa-chevron-left" onClick={prev}></i>
      )}

      <img src={pictures[current]} alt={`photo ${current + 1}`} />

      {pictures.length > 1 && (
        <i className="fa-solid fa-chevron-right" onClick={next}></i>
      )}

      {pictures.length > 1 && (
        <p className="carrousel-count">
          {current + 1}/{pictures.length}
        </p>
      )}
    </div>
    )
  }