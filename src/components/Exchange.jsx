import React, { useEffect,useState } from 'react';
import axios  from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const Exchange = () => {
    
 const [exchanges,setexchanges] = useState([])
 const [loading,setloading] = useState(true)
 const server = "https://api.coingecko.com/api/v3";
     useEffect(()=>{
 const fatchExchange= async ()=>{
    const {data} =await axios.get(`${server}/exchanges`)
    setexchanges(data) 
    setloading(false    )
 
}
  fatchExchange();
     },[])


     return (
         <div  className="main">
             <h1>Exhange</h1>
           <div className="container">

             <div className='card'>
    
        {exchanges.map((i)=>(
            <div className="Coincard" key={i.id}>
              <a href={i.url} textdecoration="none">
            
            <span className="card-img">
                     <img src={i.image} alt="image" width="40" height="40" />
                </span>
            <span className="card-rank">
                <h3>{i.trust_score_rank}</h3>
                </span>
                
            <span className="card-name">
                <h4>{i.name}</h4>
                </span>
              </a>
            </div>
     
     
     ))}
  
   <ClipLoader
     color= "#000000"
     loading={loading}
    
     size={150}
     aria-label="Loading Spinner"
     data-testid="loader"
     />
     
     </div>
    
       <div>
     
       </div>

    
     </div>
    </div>
  )
}

export default Exchange
