import { useEffect } from "react";
import { useState } from "react"
import Country from "../Country/Country";
import './Countries.css'

function Countries() {
    const [country, setCountry] = useState([]);
    const [markAsVisited, setMarkAsVisited] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data=>setCountry(data))
        
    },[])
    const handleMarkAsVisited = country =>{
        setMarkAsVisited([...markAsVisited, country])
        console.log(markAsVisited);
    }
    
    
  return (
    <div >
        <h1 style={{
            textAlign: 'center'
        }}>React-World-Tour</h1>
        <div>
            {
                markAsVisited.map(obj => <li style={{
                    listStyle: 'none'
                }} key={obj.cca3}> Country : {obj.name.common}</li>)
            }
        </div>
        <div  className="country-container">
        {
            country.map(country => <Country key={country.cca3} handleMarkAsVisited={handleMarkAsVisited} country={country}></Country>)
        }
        </div>
        

    </div>
  )
}

export default Countries