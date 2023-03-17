import React, { useEffect,useState } from 'react';
import axios  from "axios";
import Loader from './loader';

const Exchange = () => {
    
 const [exchanges,setexchanges] = useState([])
 const [Loader,setLoader] = useState(true)
 const server = "https://api.coingecko.com/api/v3";
     useEffect(()=>{
 const fatchExchange= async ()=>{
    const {data} =await axios.get(`${server}/exchanges`)
    setexchanges(data) 
 
}
  fatchExchange();
     },[])


     return (
         <div  className="container">
     
             <h1>Exhange</h1>
             
    
        {exchanges.map((i)=>(
            <div className="Coincard" key={i.id}>
              <a href={i.url}>
                <img src={i.image} alt="image"  width="50px" height="50px"/>
                <p>{i.name}</p>
                <p>{i.rank}</p>
              </a>
            </div>
     
              
        ))}
        
    
       <div>
     
       </div>

    
    </div>
  )
}

export default Exchange
