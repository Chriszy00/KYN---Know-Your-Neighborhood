import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/images/bg-inner.png";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./AddStore.css"

class AddStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeName: "",
      contactno: "",
      address: "",
      registrationDate: ""
    };
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { storeName, contactno, address, registrationDate } = this.state;
    await axios.post("http://localhost:8080/api/auth/addStore", {
      storeName,
      contactno,
      address,
      registrationDate
    });
    this.props.history.push("/stores");
  };

  render() {
    const { storeName, contactno, address, registrationDate } = this.state;
    return (
      <div className="wrapper">
        <div className="inner shadow">
          <form className="form" onSubmit={this.onSubmit}>
            <h3 className="h3-style">Add Store</h3>
            <div className="form-row">
              <div className="form-wrapper">
                <label htmlFor="storeName">Store Name *</label>
                <input
                  type="text"
                  className="form-control input-txt"
                  placeholder="Enter store name"
                  name="storeName"
                  value={storeName}
                  onChange={this.onInputChange}
                />
              </div>
              <div className="form-wrapper">
                <label htmlFor="contactno">Store Phone Number *</label>
                <input
                  type="text"
                  className="form-control input-txt"
                  placeholder="Enter phone number"
                  name="contactno"
                  value={contactno}
                  onChange={this.onInputChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-wrapper">
                <label htmlFor="address">Address *</label>
                <span className="lnr lnr-calendar-full"></span>
                <input
                  type="text"
                  className="form-control input-txt"
                  placeholder="Enter store address"
                  name="address"
                  value={address}
                  onChange={this.onInputChange}
                />
              </div>
              <div className="form-wrapper">
                <label htmlFor="RegistraionDate">Registration Date *</label>
                <span className="lnr lnr-calendar-full"></span>
                <input
                  type="text"
                  className="form-control input-txt"
                  placeholder="Enter registration date"
                  name="registrationDate"
                  value={registrationDate}
                  onChange={this.onInputChange}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(AddStore);
