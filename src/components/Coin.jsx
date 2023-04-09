import React, { useEffect,useState } from 'react';
import axios  from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const Coin = () => {
    
 const [exchanges,setexchanges] = useState([])
 const [loading,setloading] = useState(true)
 const server = "https://api.coingecko.com/api/v3";
     useEffect(()=>{
 const fatchExchange= async ()=>{
    const {data} =await axios.get(`${server}/coins/markets?vs_currency=pkr`)
    setexchanges(data) 

    setloading(false    )
 
}
  fatchExchange();
     },[])
     
     
     return (
         <div  className="main">
             <h1>Coin</h1>
           <div className="container">

             <div className='card'>
    
        {exchanges.map((i)=>(
          <div className="Coincard" key={i.id}>
             
          
        
            <div className="card-img">
                     <img src={i.image} alt="image" width="40" height="40" />
                </div>
           
            <div className="card-symbol">
                <h4>{i.symbol}</h4>
                </div>
            
            <div className="card-price">
                <h4>{"Rs"+":"+i.current_price }</h4>
                </div>
            
           
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

export default Coin