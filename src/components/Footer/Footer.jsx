import IMG from "../../assets/LOGO.png.noir.png"
import "./Footer.scss"
export default function Footer ({}){
   
    return (
    <div className="footer"> 
   <img src={IMG} alt="logo fonds noir" />
    <p>© 2020 Kasa. All rights reserved</p>
    </div>
    );
}