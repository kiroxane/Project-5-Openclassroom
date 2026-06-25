import { useState } from "react"
import "./Collapse.scss"

  export default function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="collapse">
        <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
          <span>{title}</span>
          <i className={`fa-solid fa-chevron-up ${isOpen ? "open" : ""}`}></i>
        </div>

        {isOpen && <div className="collapse-content">{children}</div>}
      </div>
    )
  }