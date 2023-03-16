import React, { useEffect,useState } from 'react';
import axios  from "axios";
const Exchange = () => {
    
 const [exchanges,setexchanges] = useState([])
 const server = "https://api.coingecko.com/api/v3";
     useEffect(()=>{
 const fatchExchange= async ()=>{
    const {data} =await axios.get(`${server}/exchanges`)
    setexchanges(data) 
}
  fatchExchange();
     },[])
  return (
    <div>
      <h1>Exhange</h1>
       <div className='list-coin'>
        {exchanges.map((i)=>{
            <div> 

            <ExchangeCard
            
            key={i.id}
            name={i.name}
            img={i.image}
            rank={i.rank} 
            url={i.url}/>
            console.log(i.url)   
            </div>
        })}
     
        
       </div>

    
    </div>
  )
}

const ExchangeCard = ({id,name,img,rank,url})=>{
    <a href="url" target="_blank">
        <img src="img" alt="exchange" width="10px" height="10px"/>
     <p>{rank}</p>
    </a>
}
export default Exchange
