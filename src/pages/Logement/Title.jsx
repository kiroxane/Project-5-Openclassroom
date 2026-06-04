export default function Title ({}){
   const pp=[
    "Cozy loft on the Canal Saint-Martin",
    "Paris, Île-de-France"
   ]
    return (
    <div className="p"> 
    {pp.map(p=>(<p key={p}>{p}</p>))}
    
    </div>
    );
}