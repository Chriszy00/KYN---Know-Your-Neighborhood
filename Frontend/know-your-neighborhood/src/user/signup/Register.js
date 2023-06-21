import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import axios from "axios";
const FormItem = Form.Item;

class Register extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    errors: {},
  };

  onInputChange = (e) => {
    const { name, value } = e.target;
    const errors = { ...this.state.errors };

    if (name === "name") {
      if (value.trim().length < 4) {
        errors[name] = "Name must be at least 4 characters long";
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        errors[name] = "Name must only contain letters and spaces";
      } else {
        delete errors[name];
      }
    } else if (name === "username") {
      if (value.length < 4) {
        errors[name] = "Username must be at least 4 characters long";
      } else {
        delete errors[name];
      }
    } else if (name === "email") {
      if (!value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
        errors[name] = "Invalid email address";
      } else {
        delete errors[name];
      }
    } else if (name === "password") {
      if (value.length < 8) {
        errors[name] = "Password must be at least 8 characters long";
      } else {
        delete errors[name];
      }
    }

    this.setState({
      [name]: value,
      errors: {
        ...errors,
      },
    });
  };

  validateForm = () => {
    const { name, username, email, password } = this.state;
    const errors = {};

    if (name.length < 4) {
      errors.name = "Name must be at least 4 characters long";
    } else if (!/^[a-zA-Z]+$/.test(name)) {
      errors.name = "Name must only contain letters";
    }

    if (username.length < 4) {
      errors.username = "Username must be at least 4 characters long";
    }

    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      errors.email = "Invalid email address";
    }

    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    this.setState({ errors });

    return Object.keys(errors).length === 0;
  };

  onSubmit = async (e) => {
    // Add 'async' keyword here
    e.preventDefault();
    if (this.validateForm()) {
      console.log("Form submitted");
      const { user } = this.state;
      await axios.post("http://localhost:8080/api/auth/signup", user);
      this.props.history.push("/login");
    }
  };

  render() {
    const { name, username, email, password, errors } = this.state;

    return (
      <section
        className="min-vh-100 bg"
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        <div className=" py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6"></div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <div className="card me-5">
                <div className="card-body p-md-4">
                  <div className="card-title text-center">
                    <h2 className="mb-2">Create an Account</h2>
                    <h6 className="mb-4 text-muted">
                      Already have an account? <Link to="/login">Sign In</Link>
                    </h6>
                  </div>
                  <form onSubmit={this.onSubmit}>
                    {/* Name Input */}
                    <div className="form-outline mb-4">
                      <FormItem
                        validateStatus={errors.name ? "error" : ""}
                        help={errors.name}
                      >
                        <label
                          className="fs-6 mb-3"
                          style={{ fontFamily: "'Open Sans', sans-serif" }}
                        >
                          Name
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={name}
                          onChange={this.onInputChange}
                        />
                      </FormItem>
                    </div>

                    {/* Username Input */}
                    <div className="form-outline mb-4">
                      <FormItem
                        validateStatus={errors.username ? "error" : ""}
                        help={errors.username}
                      >
                        <label
                          className="fs-6 mb-3"
                          style={{ fontFamily: "'Open Sans', sans-serif" }}
                        >
                          Username
                        </label>
                        <Input
                          type="text"
                          name="username"
                          value={username}
                          onChange={this.onInputChange}
                        />
                      </FormItem>
                    </div>

                    {/* Email Input */}
                    <div className="form-outline mb-4">
                      <FormItem
                        validateStatus={errors.email ? "error" : ""}
                        help={errors.email}
                      >
                        <label
                          className="fs-6 mb-3"
                          style={{ fontFamily: "'Open Sans', sans-serif" }}
                        >
                          Email
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={email}
                          onChange={this.onInputChange}
                        />
                      </FormItem>
                    </div>

                    {/* Password Input */}
                    <div className="form-outline mb-4">
                      <FormItem
                        //   label="Password"
                        validateStatus={errors.password ? "error" : ""}
                        help={errors.password}
                      >
                        <label
                          className="fs-6 mb-3"
                          style={{ fontFamily: "'Open Sans', sans-serif" }}
                        >
                          Password
                        </label>
                        <Input
                          type="password"
                          name="password"
                          value={password}
                          onChange={this.onInputChange}
                        />
                      </FormItem>
                    </div>

                    {/* Submit Button */}
                    <div className="btn-container">
                      {/* Submit button */}
                      <FormItem>
                        <Button
                          type="primary"
                          htmlType="submit"
                          size="large"
                          className="signup-form-button"
                          // disabled={this.isFormInvalid()}
                        >
                          Sign up
                        </Button>
                      </FormItem>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Register);
