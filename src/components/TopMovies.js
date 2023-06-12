import React from "react";
import { TfiVideoClapper } from 'react-icons/tfi';
const TopMovies = () => {
  return (
    <div className="container-fluid mb-5 bg-dark text-white topMoviesHeight">
      <div className="container ">
        <h2 className="text-center py-5 mt-5 topMovies fs-1 fw-bolder"><TfiVideoClapper className="text-warning"/><span className="px-3">Top movies</span></h2>
        
      </div>
    </div>
  );
};

export default TopMovies;
