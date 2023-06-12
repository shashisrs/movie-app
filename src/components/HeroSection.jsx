import React from "react";
import video from "../assets/sample.mp4";
const HeroSection = () => {
  return (
    <div>
      <section className="hero-section bg-dark text-white">
        <div className="container">
          <div className="row">
            {/* hero-text-section */}
            <div className="col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-start">
              <h1 className="fw-bolder text-capitalize">
                We have a collection of best movies
              </h1>
              <p className="mt-3 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className="text-center w-100 text-md-start mb-5">
                <button className="btn btn-primary py-2 px-5">Browse</button>
              </div>
            </div>

            {/* hero-video-section */}
            <div className="col-12 col-md-6 col-lg-6">
              <div className="text-center text-lg-end ">
                <video
                  src={video}
                  loop
                  autoPlay
                  muted
                  className="video-section"
                >
                  Your browser does not support video tag.
                </video>
              </div>
            </div>
          </div>
          <div className=" d-none d-sm-block custom-shape-divider-bottom-1685775143">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
