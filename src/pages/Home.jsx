import React from 'react'
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TopMovies from "../components/TopMovies";
import CollectionList from "../components/CollectionList";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
const Home = () => {

    const [collection, setCollection] = useState([]);
    const API_URL = "https://api.tvmaze.com/search/shows?q=all";
  
    const movieData = async (API_URL) => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setCollection(data);
        console.log(collection);
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

<Navbar />
      <HeroSection />
      <TopMovies />

      <div className='container-fluid my-5 py-5 d-flex justify-content-center bg-dark row gap-4 mt-3 mx-auto'>
      {collection.map((item) => {
        return <CollectionList key={item?.show?.id} movie={item}/>;
      })}
      </div>
      
      <Footer />
    </div>
  )
}

export default Home