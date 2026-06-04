export default function Buttonshort({}){
   const btnName=[
    "Cozy",
    "Canal",
    "Paris 10"
   ]
    return (
    <div className="buttonshort"> 
    {btnName.map(btn=>(<button key={btn}>{btn}</button>))}
   
    </div>
    );
}


