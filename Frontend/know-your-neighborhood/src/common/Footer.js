import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style-footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid no-padding">
        {/* Footer */}
        <footer
          className="text-center text-white"
          style={{ backgroundColor: "#212529" }}
        >
          {/* Grid container */}
          <div
            className="container "
            style={{ fontFamily: "Roboto Slab, serif" }}
          >
            {/* Section: Links */}
            <section className="">
              {/* Grid row*/}
              <div className="row text-center d-flex justify-content-center pt-5">
                {/* Grid column */}
                <div className="col-md-2">
                  <h6
                    className="text-uppercase font-weight-bold"
                    style={{ fontFamily: "Roboto Slab, serif" }}
                  >
                    <Link to="/about" className="text-white">
                      About us
                    </Link>
                  </h6>
                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div className="col-md-2">
                  <h6
                    className="text-uppercase font-weight-bold"
                    style={{ fontFamily: "Roboto Slab, serif" }}
                  >
                    <Link to="/TAndC" className="text-white">
                      Terms & Conditions
                    </Link>
                  </h6>
                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div className="col-md-2">
                  <h6
                    className="text-uppercase font-weight-bold"
                    style={{ fontFamily: "Roboto Slab, serif" }}
                  >
                    <Link to="/contactus" className="text-white">
                      Contact Us
                    </Link>
                  </h6>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </section>
            {/* Section: Links */}

            <hr className="my-3" />

            {/* Section: Text */}
            <section className="mb-3">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8 fs-6">
                  <p>
                    Discover, Connect, and Embrace Your Neighborhood with KYN
                  </p>
                  <p className="lh-lg">Know Your Neighborhood</p>
                </div>
              </div>
            </section>
            {/* Section: Text */}
          </div>
          {/* Grid container */}

          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023
            <a
              className="text-white ms-2"
              href="/"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              KYN
            </a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
    );
  }
}

export default Footer;
