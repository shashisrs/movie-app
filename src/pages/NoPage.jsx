import React from "react";
import notFound from "../assets/404.mp4";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const NoPage = () => {
  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <video src={notFound} loop autoPlay muted className="notFound">
            Your browser does not support video tag.
          </video>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NoPage;
