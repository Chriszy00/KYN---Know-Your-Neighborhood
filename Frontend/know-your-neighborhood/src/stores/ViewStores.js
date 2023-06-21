import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import img13 from "../assets/images/img13.jpg";

class ViewUser extends Component {
  state = {
    store: {
      storeName: "",
      contactno: "",
      address: "",
      registrationDate: ""
    }
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser = async () => {
    const { id } = this.props.match.params;
    try {
      const result = await axios.get(`http://localhost:8080/api/auth/storeDetails/${id}`);
      this.setState({ store: result.data });
    } catch (error) {
      console.error("Error loading user:", error);
    }
  };

  render() {
    const { store } = this.state;

    return (
      <section className="vh-100 container-fluid bg">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={img13}
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 align-items-center">
                    <div
                      className="card-body text-black p-md-5"
                      style={{ fontFamily: "'Roboto Slab', serif" }}
                    >
                      <h1 className="card-title ms-5 text-center text-primary py-5">
                        Store Details
                      </h1>
                      <form>
                        <div className="row mb-3">
                          <div className="col">
                            <label htmlFor="storeName" className="mb-2">
                              Store Name
                            </label>
                            <input
                              className="form-control text-center pt-2"
                              value={store.storeName}
                              readOnly
                            />
                          </div>
                          <div className="col">
                            <label htmlFor="contactno" className="mb-2">
                              Store Phone Number
                            </label>
                            <input
                              className="form-control text-center pt-2"
                              value={store.contactno}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col">
                            <label htmlFor="address" className="mb-2">
                              Store Address
                            </label>
                            <input
                              className="form-control text-center pt-2"
                              value={store.address}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <label htmlFor="registrationDate" className="mb-2">
                              Registration Date
                            </label>
                            <input
                              className="form-control text-center pt-2"
                              value={store.registrationDate}
                              readOnly
                            />
                          </div>
                        </div>
                        <Link className="btn btn-outline-primary mt-5 btn-lg" to={"/users"}>
                          Go Back
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(ViewUser);
