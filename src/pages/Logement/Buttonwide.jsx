import Image from "../../assets/Vector (1).png"

export default function Buttonwide ({}){
   const btnName=[
    "Description",
    "Équipements"
   ]
    return (
    <div className="buttonwide"> 
    {btnName.map(btn=>(<button key={btn}>{btn}  <img src={Image} alt="vector" /></button>))}
   
    </div>
    );
}