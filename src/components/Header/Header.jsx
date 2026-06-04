import LOGO from '../../assets/LOGO.png'
import Nav from "../Navbar/Nav.jsx"
import './Header.css'

export default function Header(){
  return(
    <div className="header">
      <img className="logo" src={LOGO} alt="Logo du site" />
      <Nav />
    </div>
  );
}
