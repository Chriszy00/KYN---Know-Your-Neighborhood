import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style-login.css";
import { Link } from "react-router-dom";
import { ACCESS_TOKEN } from "../../constant/index";
import { login } from "../../util/APIUtils";

import { Form, Input, Button, notification } from "antd";

const { Item } = Form;

const Login = (props) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const loginRequest = { ...values };
    login(loginRequest)
      .then((response) => {
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        props.history.push("/home");
      })
      .catch((error) => {
        if (error.status === 401) {
          notification.error({
            message: "KYN App",
            description:
              "Your Username or Password is incorrect. Please try again!",
          });
        } else {
          notification.error({
            message: "KYN App",
            description:
              error.message || "Sorry! Something went wrong. Please try again!",
          });
        }
      });
  };

  return (
    <section
      className="min-vh-100 bgs"
      style={{ fontFamily: "'Roboto Slab', serif" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6"></div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <div className="card mt-5">
              <div className="card-body p-md-4">
                <div className="card-title text-center">
                  <h2 className="mb-2">Sign In</h2>
                  <h6 className="mb-4 text-muted">
                    Don't have an account? <Link to="/register">Register</Link>
                  </h6>
                </div>
                <Form
                  form={form}
                  onFinish={handleSubmit}
                  className="login-form"
                >
                  {/* Username input */}
                  <div className="form-outline mb-4">
                    <Item
                      name="usernameOrEmail"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username or email!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        name="usernameOrEmail"
                        placeholder="Username or Email"
                      />
                    </Item>
                  </div>

                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Password!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        name="password"
                        type="password"
                        placeholder="Password"
                      />
                    </Item>
                  </div>

                  <div className=" mb-4">
                    <a href="#!">Forgot password?</a>
                  </div>

                  {/* Button container */}
                  <div className="btn-container">
                    {/* Submit button */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-md btn-block col-12 col-md-12"
                    >
                      Login
                    </button>

                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0 text-muted">
                        OR
                      </p>
                    </div>

                    <div className="d-flex flex-column">
                      <Link
                        className="btn btn-primary btn-lg btn-block mb-3"
                        style={{ backgroundColor: "#3b5998" }}
                        to="/loginFb"
                        role="button"
                      >
                        <i className="fab fa-facebook-f me-2"></i>Continue with
                        Facebook
                      </Link>
                      <Link
                        className="btn btn-primary btn-lg btn-block mb-3"
                        style={{ backgroundColor: "#FF3E30" }}
                        to="/logingoogle"
                        role="button"
                      >
                        <i className="fab fa-twitter me-2"></i>Continue with
                        Google
                      </Link>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
