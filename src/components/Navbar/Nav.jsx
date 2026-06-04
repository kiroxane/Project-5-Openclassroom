export default function Nav ({}){

    const lists=[
        'Accueil',
        'A Propos'
    ]
return <ul className="nav">
   {lists.map(list=>(<li key={list}>{list}</li>))}
   
</ul>

  
}




