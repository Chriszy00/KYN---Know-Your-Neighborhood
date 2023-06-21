import React, { Component } from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import "bootstrap/dist/css/bootstrap.min.css";


class NotFound extends Component {
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
                    className="card-title text-dark ms-5 me-5 "
                    style={{ fontFamily: "'Tangerine', cursive", fontSize: "100px" }}
                  >
                    404
                  </h1>
                  <p
                    className="card-text fs-3"
                    style={{ fontFamily: "'Roboto Slab', serif" }}
                  >
                    Page Not Found
                  </p>
                  <p
                    className="card-text fs-5"
                    style={{ fontFamily: "'Roboto Slab', serif" }}
                  >
                    The Page you are looking for doesn't exists or an other error occured <br/> Go back, or contact your administrator
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
      

export default NotFound;