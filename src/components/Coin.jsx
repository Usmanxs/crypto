import React, { useEffect, useState } from 'react';

import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';
import Footer from './Footer';

const Coin = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const server = 'https://api.coingecko.com/api/v3';

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=pkr`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exchanges:', error);
        setLoading(false);
      }
    };

    fetchExchanges();
  }, []);

  return (
    <div className="main">
      <h1>Coins</h1>
      <div className="container">
        <div className="card">
          {exchanges.map((coin) => (
            <div className="Coincard" key={coin.id}>
              <div className="card-img">
                <img src={coin.image} alt="image" width="40" height="40" padding="0.5" />
              </div>
              <div className="card-symbol">
                <h4>{coin.symbol}</h4>
              </div>
              <div className="card-price">
                <h4>{"Rs" + ":" + coin.current_price}</h4>
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
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Coin;
