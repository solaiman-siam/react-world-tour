import { useState } from 'react';
import './Country.css'

function Country({country,handleMarkAsVisited}) {
    const {name,flags,region,population} = country
    
    const [visited, setVisited] = useState(false)
    
    const handleVisitedCountry = ()=>{
        
        setVisited(!visited)
    }
    
  return (
    <div className={`country ${visited? 'visited-color': ''}`}>
        <img className='image' src={flags.png} alt="" />
        <p>Country Name : {name.common}</p>
        <p>Population : {population}</p>
        <p>Region : {region}</p>
        <button onClick={handleVisitedCountry}>{visited? 'Visited': 'Going'}</button>
        <p>{visited? 'I have already visited': "I'm interested"}</p>
        <button onClick={()=>handleMarkAsVisited(country)}>Mark Visited</button>
    </div>
  )
}

export default Country