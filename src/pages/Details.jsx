import React from 'react'
import Navbar from '../components/Navbar';
import DetailsCard from '../components/DetailsCard';
import Footer from '../components/Footer';
import { useEffect, useState } from "react";
import BuyTicket from '../components/BuyTicket';
const Details = () => {
  const [items, setItems] = useState([]);
    const API_URL = "https://api.tvmaze.com/search/shows?q=all";
  
    const movieData = async (API_URL) => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setItems(data);
        console.log(items);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      movieData(API_URL);
      // eslint-disable-next-line
    }, []);

  return (
    <div>
    <Navbar  />
    <BuyTicket />
    <div className='container-fluid my-5 py-5 d-flex justify-content-center bg-dark row gap-4 mt-3 mx-auto'>
      {items.map((item) => {
        return <DetailsCard key={item?.show?.id} movie={item}/>;
      })}
      </div>
      
    <Footer />
    </div>
  )
}

export default Details