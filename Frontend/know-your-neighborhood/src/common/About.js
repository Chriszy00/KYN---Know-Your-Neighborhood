import React, { Component } from "react";
import "../assets/css/style-about.css";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from  "../assets/images/img7.jpg";

class About extends Component {
  render() {
    return (
      <div style={{ fontFamily: "'Roboto Slab', serif" }}>
        <div className="bg-light">
          <div className="container py-5">
            <div className="row h-100 align-items-center py-5">
              <div className="col-lg-6">
                <h1 className="display-4">About us</h1>
                <p className="lead text-muted mb-0">Know Your Neighborhood:</p>
                <p className="lead text-muted">
                  Connecting Communities, Unveiling Possibilities
                </p>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <img
                  src={img5}
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-5">
          <div className="container py-5">
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 order-2 order-lg-1">
                <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                <h2 className="font-weight-light">Why choose us?</h2>
                <p className="font-italic text-muted mb-4 text-justify">
                  At KYN (Know Your Neighborhood), we strive to be your go-to
                  platform for discovering and exploring your neighborhood. Here
                  are some reasons why you should choose us:
                </p>
                <ul className="text-justify text-muted">
                  <li>
                    <h6 className="text-bold">User-Centric Approach:</h6> Your
                    needs and preferences are at the heart of everything we do. We
                    constantly strive to enhance your user experience by tailoring
                    our platform to meet your specific interests and requirements.
                  </li>
                  <li>
                    <h6 className="text-bold mt-3">
                      Empowering Community Engagement:
                    </h6>{" "}
                    We believe in the power of strong communities. KYN facilitates
                    connections and fosters engagement among neighbors, empowering
                    you to collaborate, share recommendations, and participate in
                    local initiatives.
                  </li>
                  <li>
                    <h6 className="text-bold mt-3">Trustworthy and Reliable:</h6>{" "}
                    You can rely on us to deliver accurate and up-to-date
                    information. We diligently curate our data to ensure its
                    reliability, so you can make informed decisions and trust the
                    information you find on our platform.
                  </li>
                  <li>
                    <h6 className="text-bold mt-3">User-Friendly Interface:</h6>{" "}
                    Our intuitive and user-friendly interface makes it easy to
                    navigate and discover the hidden gems in your neighborhood.
                    Whether you're a long-time resident or new to the area, KYN
                    provides a seamless experience for everyone.
                  </li>
                </ul>
                <a
                  href="landing"
                  className="btn btn-primary px-5 rounded-pill shadow-sm"
                >
                  Learn More
                </a>
              </div>
              <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                <img
                  src={img6}
                  alt=""
                  className="img-fluid mb-4 mb-lg-0 rounded"
                />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-5 px-5 mx-auto">
                <img
                  src={img7}
                  alt=""
                  className="img-fluid mb-4 mb-lg-0 rounded"
                />
              </div>
              <div className="col-lg-6">
                <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                <h2 className="font-weight-light">Who we are?</h2>
                <p className="font-italic text-muted mb-4 text-justify">
                  At KYN, we are a passionate team of community enthusiasts who
                  believe that strong neighborhoods form the foundation of vibrant
                  and fulfilling lives. We are committed to building a platform
                  that brings people together, celebrates local cultures, and
                  unlocks the true potential of every community.
                </p>
                <p className="font-italic text-muted mb-4 text-justify">
                  Our team consists of experienced developers, data analysts, and
                  community advocates who work tirelessly to curate valuable
                  information and create an inclusive space for neighbors to
                  connect. We are driven by the belief that when individuals are
                  well-informed about their neighborhoods, they can actively
                  contribute to the growth and betterment of their communities.
                </p>
                <p className="font-italic text-muted mb-4 text-justify">
                  Join us on this exciting journey as we empower you to explore,
                  engage, and truly know your neighborhood like never before.
                </p>
                <a
                  href="landing"
                  className="btn btn-primary px-5 rounded-pill shadow-sm"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light py-5">
          <div className="container py-5">
            <div className="row mb-4">
              <div className="col-lg-5">
                <h2 className="display-4 font-weight-light">Our team</h2>
                <p className="font-italic text-muted">Meet Our Team</p>
              </div>
            </div>

            <div className="row text-center">
              {/* Team item*/}
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png"
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Patricia Smith</h5>
                  <span className="small text-uppercase text-muted">
                    CEO - Founder
                  </span>
                </div>
              </div>
              {/* End*/}

              {/* Team item*/}
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png"
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Robert Kinston</h5>
                  <span className="small text-uppercase text-muted">
                    CEO - Founder
                  </span>
                </div>
              </div>
              {/* End*/}

              {/* Team item*/}
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png"
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Chris Lane</h5>
                  <span className="small text-uppercase text-muted">
                    CEO - Founder
                  </span>
                </div>
              </div>
              {/* End*/}

              {/* Team item*/}
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png"
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">James Green</h5>
                  <span className="small text-uppercase text-muted">
                    CEO - Founder
                  </span>
                </div>
              </div>
              {/* End*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
