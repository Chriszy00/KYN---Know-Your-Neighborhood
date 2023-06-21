import React, { Component } from "react";
import img2 from "../assets/images/img2.svg"
import { Link } from "react-router-dom";
class NotAllowed extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card shadow-lg w-75 d-flex justify-content-center align-items-center rounded-3 border border-2 border border-dark bg-white">
          {/* <img
            src={img2}
            width="400px"
            height="300px"
            className="mb-5"
            style={{ transform: "translateY(-50%)", position: "absolute" }}
          /> */}
          <div className="card-body text-center ">
            <h1
              className="card-title text-success ms-5 me-5 "
              style={{ fontFamily: "'Tangerine', cursive", fontSize: "100px" }}
            >
              403
            </h1>
            <p
              className="card-text fs-3"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              Access Denied
            </p>
            <p
              className="card-text fs-5"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              You are not authorized to access this page. <br/> Please contact your Administrator
            </p>
            <Link
              to="/home"
              className="btn btn-primary btn-lg mb-3"
              style={{ minWidth: "", fontFamily: "'Roboto Slab', serif" }}
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NotAllowed;
