import React from 'react';
import "../assets/css//style-landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-image container-fluid min-vh-100 bgg d-flex align-items-center justify-content-center">
      <div className="text-center" style={{ fontFamily: "'Roboto Slab', serif" }}>
        <h1 className="fw-normal mb-3 text-light mt-5" style={{ fontFamily: "'Roboto Slab', serif" }}>
          Welcome to KYN 
        </h1>
        <h2 className="fw-lighter fs-4 text-light" style={{ fontFamily: "'Roboto Slab', serif" }}>
          Uncover the hidden gems, connect with your neighbors,
        </h2>
        <h2 className="fw-lighter fs-4 text-light" style={{ fontFamily: "'Roboto Slab', serif" }}>
          and experience the essence of your community.
        </h2>
        <Link
          className="btn btn-primary btn-lg mt-3 me-3 text-light"
          to="/login"
          style={{ fontFamily: "'Roboto Slab', serif" }}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
