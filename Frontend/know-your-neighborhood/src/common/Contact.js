import React, { Component } from "react";
import img3 from "../assets/images/img3.svg";
import "../assets/css/style-contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="content" style={{ fontFamily: "'Roboto Slab', serif" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <h3 className="heading mb-4">Connect With Us!</h3>
                  <p>We are here for questions or consulting</p>
                  <p>
                    <img
                      src={img3}
                      alt="Imagec"
                      className="img-fluid"
                    />
                  </p>
                </div>
                <div className="col-md-6">
                  <form
                    className="mb-5"
                    method="post"
                    id="contactForm"
                    name="contactForm"
                  >
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group mt-3">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group mt-3">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group mt-3">
                        <textarea
                          className="form-control"
                          name="message"
                          id="message"
                          cols="30"
                          rows="7"
                          placeholder="Write your message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mt-3">
                        <input
                          type="submit"
                          value="Send Message"
                          className="btn btn-primary rounded-0 py-2 px-4"
                        />
                        <span className="submitting"></span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
