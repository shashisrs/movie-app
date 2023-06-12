import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="position-relative footer-parent">
    {/* tilt shape */}
      <div className="custom-shape-divider-top-1685868427">
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
      <div className="container-fluid d-flex  justify-content-center text-white bg-dark footer">
        <div className="d-flex fs-4 align-items-center ">
          <AiOutlineCopyrightCircle />
          <span className="px-3"> movieAPP | 2023</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
