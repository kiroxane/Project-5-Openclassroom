import Image from "../../assets/Host.png"
export default function Aside ({}){
    return (
    <div className="aside">
      <div className="aside-nom">
        <span>Alexandre</span>
        <span>Dumas</span>
      </div>
      <img src={Image} alt="Photo de l'hôte" />
    </div>
    );
}