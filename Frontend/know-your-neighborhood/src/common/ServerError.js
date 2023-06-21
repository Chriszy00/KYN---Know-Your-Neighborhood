import React, { Component } from 'react';
import './ServerError.css';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

class ServerError extends Component {
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
                    500
                  </h1>
                  <p
                    className="card-text fs-3 text-danger"
                    style={{ fontFamily: "'Roboto Slab', serif" }}
                  >
                    Opps. something went wrong
                  </p>
                  <p
                    className="card-text fs-5"
                    style={{ fontFamily: "'Roboto Slab', serif" }}
                  >
                    The server encountered an internal error or misconfiguration <br/> and was unable to complete your request
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
      

export default ServerError;