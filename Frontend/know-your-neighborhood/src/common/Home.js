import React from "react";
import "../assets/css/style-home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className="bg-image container-fluid min-vh-100 bbg">
      <div className="container ">
        <div className="">
          <div className="col-md-12" style={{ padding: "25% 0" }}>
            <h1 className="fw-normal mb-3 text-light" style={{ fontFamily: "'Roboto Slab', serif" }}>
              Let's Shop Together!
            </h1>
            <h2 className="fw-lighter fs-4 text-light" style={{ fontFamily: "'Roboto Slab', serif" }}>
              Let's Explore and Know Your Neighborhood
            </h2>
            <Link
              className="btn btn-primary btn btn-lg mt-3 me-3 text-light" to="/addstore" style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Add Store
            </Link>
			<Link
              className="btn btn-primary btn btn-lg mt-3 text-light" to="/stores" style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              View Stores
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
