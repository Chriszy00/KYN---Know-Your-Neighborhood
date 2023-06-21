import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style-reg.css";
import {
  NAME_MIN_LENGTH,
  NAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  EMAIL_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
} from "../../constant/index";
import {
  signup,
  checkUsernameAvailability,
  checkEmailAvailability,
} from "../../util/APIUtils";

import { Form, Input, Button, notification } from "antd";
const FormItem = Form.Item;

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
      },
      username: {
        value: "",
      },
      email: {
        value: "",
      },
      password: {
        value: "",
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateUsernameAvailability =
      this.validateUsernameAvailability.bind(this);
    this.validateEmailAvailability = this.validateEmailAvailability.bind(this);
    this.isFormInvalid = this.isFormInvalid.bind(this);
  }

  handleInputChange(event, validationFun) {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    this.setState({
      [inputName]: {
        value: inputValue,
        ...validationFun(inputValue),
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const signupRequest = {
      name: this.state.name.value,
      email: this.state.email.value,
      username: this.state.username.value,
      password: this.state.password.value,
    };
    signup(signupRequest)
      .then((response) => {
        notification.success({
          message: "KYN App",
          description:
            "Thank you! You're successfully registered. Please Login to continue!",
        });
        this.props.history.push("/login");
      })
      .catch((error) => {
        notification.error({
          message: "KYN App",
          description:
            error.message || "Sorry! Something went wrong. Please try again!",
        });
      });
  }

  isFormInvalid() {
    return !(
      this.state.name.validateStatus === "success" &&
      this.state.username.validateStatus === "success" &&
      this.state.email.validateStatus === "success" &&
      this.state.password.validateStatus === "success"
    );
  }
  render() {
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
                <Form onSubmit={this.handleSubmit}>
                  {/* Name input */}
                  <div className="form-outline mb-4">
                    <FormItem
                      validateStatus={this.state.name.validateStatus}
                      help={this.state.name.errorMsg}
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
                        autoComplete="off"
                        className="form-control form-control-sm"
                        placeholder="Enter your full name"
                        value={this.state.name.value}
                        onChange={(event) =>
                          this.handleInputChange(event, this.validateName)
                        }
                      />
                    </FormItem>
                  </div>

                  {/* Username input */}
                  <div className="form-outline mb-4">
                    <FormItem
                      hasFeedback
                      validateStatus={this.state.username.validateStatus}
                      help={this.state.username.errorMsg}
                    >
                      <label
                        className="fs-6 mb-3"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        Username
                      </label>
                      <Input
                        size="large"
                        name="username"
                        autoComplete="off"
                        placeholder="A unique username"
                        value={this.state.username.value}
                        onBlur={this.validateUsernameAvailability}
                        onChange={(event) =>
                          this.handleInputChange(event, this.validateUsername)
                        }
                      />
                    </FormItem>
                  </div>

                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <FormItem
                      hasFeedback
                      validateStatus={this.state.email.validateStatus}
                      help={this.state.email.errorMsg}
                    >
                      <label
                        className="fs-6 mb-3"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        Email
                      </label>

                      <Input
                        size="large"
                        name="email"
                        type="email"
                        autoComplete="off"
                        placeholder="Enter your email"
                        value={this.state.email.value}
                        onBlur={this.validateEmailAvailability}
                        onChange={(event) =>
                          this.handleInputChange(event, this.validateEmail)
                        }
                      />
                    </FormItem>
                  </div>

                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <FormItem
                      validateStatus={this.state.password.validateStatus}
                      help={this.state.password.errorMsg}
                    >
                      <label
                        className="fs-6 mb-3"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        Password
                      </label>
                      <Input
                        size="large"
                        name="password"
                        type="password"
                        autoComplete="off"
                        placeholder="A password between 6 to 20 characters"
                        value={this.state.password.value}
                        onChange={(event) =>
                          this.handleInputChange(event, this.validatePassword)
                        }
                      />
                    </FormItem>
                  </div>

                  {/* Button container */}
                  <div className="btn-container">
                    {/* Submit button */}
                    <FormItem>
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        className="signup-form-button"
                        disabled={this.isFormInvalid()}
                      >
                        Sign up
                      </Button>
                    </FormItem>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


  // Validation Functions

  validateName = (name) => {
    if (name.length < NAME_MIN_LENGTH) {
      return {
        validateStatus: "error",
        errorMsg: `Name is too short (Minimum ${NAME_MIN_LENGTH} characters needed.)`,
      };
    } else if (name.length > NAME_MAX_LENGTH) {
      return {
        validationStatus: "error",
        errorMsg: `Name is too long (Maximum ${NAME_MAX_LENGTH} characters allowed.)`,
      };
    } else {
      return {
        validateStatus: "success",
        errorMsg: null,
      };
    }
  };

  validateEmail = (email) => {
    if (!email) {
      return {
        validateStatus: "error",
        errorMsg: "Email may not be empty",
      };
    }

    const EMAIL_REGEX = RegExp("[^@ ]+@[^@ ]+\\.[^@ ]+");
    if (!EMAIL_REGEX.test(email)) {
      return {
        validateStatus: "error",
        errorMsg: "Email not valid",
      };
    }

    if (email.length > EMAIL_MAX_LENGTH) {
      return {
        validateStatus: "error",
        errorMsg: `Email is too long (Maximum ${EMAIL_MAX_LENGTH} characters allowed)`,
      };
    }

    return {
      validateStatus: null,
      errorMsg: null,
    };
  };

  validateUsername = (username) => {
    if (username.length < USERNAME_MIN_LENGTH) {
      return {
        validateStatus: "error",
        errorMsg: `Username is too short (Minimum ${USERNAME_MIN_LENGTH} characters needed.)`,
      };
    } else if (username.length > USERNAME_MAX_LENGTH) {
      return {
        validationStatus: "error",
        errorMsg: `Username is too long (Maximum ${USERNAME_MAX_LENGTH} characters allowed.)`,
      };
    } else {
      return {
        validateStatus: null,
        errorMsg: null,
      };
    }
  };

  validateUsernameAvailability() {
    // First check for client side errors in username
    const usernameValue = this.state.username.value;
    const usernameValidation = this.validateUsername(usernameValue);

    if (usernameValidation.validateStatus === "error") {
      this.setState({
        username: {
          value: usernameValue,
          ...usernameValidation,
        },
      });
      return;
    }

    this.setState({
      username: {
        value: usernameValue,
        validateStatus: "validating",
        errorMsg: null,
      },
    });

    checkUsernameAvailability(usernameValue)
      .then((response) => {
        if (response.available) {
          this.setState({
            username: {
              value: usernameValue,
              validateStatus: "success",
              errorMsg: null,
            },
          });
        } else {
          this.setState({
            username: {
              value: usernameValue,
              validateStatus: "error",
              errorMsg: "This username is already taken",
            },
          });
        }
      })
      .catch((error) => {
        // Marking validateStatus as success, Form will be recchecked at server
        this.setState({
          username: {
            value: usernameValue,
            validateStatus: "success",
            errorMsg: null,
          },
        });
      });
  }

  validateEmailAvailability() {
    // First check for client side errors in email
    const emailValue = this.state.email.value;
    const emailValidation = this.validateEmail(emailValue);

    if (emailValidation.validateStatus === "error") {
      this.setState({
        email: {
          value: emailValue,
          ...emailValidation,
        },
      });
      return;
    }

    this.setState({
      email: {
        value: emailValue,
        validateStatus: "validating",
        errorMsg: null,
      },
    });

    checkEmailAvailability(emailValue)
      .then((response) => {
        if (response.available) {
          this.setState({
            email: {
              value: emailValue,
              validateStatus: "success",
              errorMsg: null,
            },
          });
        } else {
          this.setState({
            email: {
              value: emailValue,
              validateStatus: "error",
              errorMsg: "This Email is already registered",
            },
          });
        }
      })
      .catch((error) => {
        // Marking validateStatus as success, Form will be recchecked at server
        this.setState({
          email: {
            value: emailValue,
            validateStatus: "success",
            errorMsg: null,
          },
        });
      });
  }

  validatePassword = (password) => {
    if (password.length < PASSWORD_MIN_LENGTH) {
      return {
        validateStatus: "error",
        errorMsg: `Password is too short (Minimum ${PASSWORD_MIN_LENGTH} characters needed.)`,
      };
    } else if (password.length > PASSWORD_MAX_LENGTH) {
      return {
        validationStatus: "error",
        errorMsg: `Password is too long (Maximum ${PASSWORD_MAX_LENGTH} characters allowed.)`,
      };
    } else {
      return {
        validateStatus: "success",
        errorMsg: null,
      };
    }
  };
}

export default Signup;
