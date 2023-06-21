import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ACCESS_TOKEN } from "../constant/index";
import "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavbarOpen: false,
    };
  }

  handleMenuClick = ({ key }) => {
    if (key === "logout") {
      localStorage.removeItem(ACCESS_TOKEN);
      this.props.onLogout(); // Call the callback function to change the navbar
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick, false);
  }

  handleOutsideClick = (event) => {
    if (this.navbarRef && !this.navbarRef.contains(event.target)) {
      this.setState({
        isNavbarOpen: false,
      });
    }
  };

  toggleNavbar = () => {
    this.setState((prevState) => ({
      isNavbarOpen: !prevState.isNavbarOpen,
    }));
  };

  render() {
    const currentUser = localStorage.getItem(ACCESS_TOKEN);

    let logoLink;
    let homeLink;

    if (currentUser) {
      // User is logged in
      logoLink = "/home";
      homeLink = "/home";
    } else {
      // User is not logged in
      logoLink = "/";
      homeLink = "/";
    }

    let menuItems;

    if (currentUser) {
      menuItems = [
        // Render the menu items for logged-in users
        <li className="nav-item me-4" key="home">
          <Link className="nav-link fs-6 text-white fw-normal" to={homeLink}>
            Home
          </Link>
        </li>,
        <li className="nav-item me-4" key="allUsers">
          <Link className="nav-link fs-6 text-white fw-normal" to="/users">
            Users
          </Link>
        </li>,
        <li className="nav-item me-4" key="allsStores">
          <Link className="nav-link fs-6 text-white fw-normal" to="/stores">
             Stores
          </Link>
        </li>,
        // <li className="nav-item me-4" key="profile">
        //   <Link className="nav-link fs-6 text-white fw-normal" to="/userprofile">
        //     Profile
        //   </Link>
        // </li>,
        <li className="nav-item me-4" key="logout">
          <Link
            className="nav-link fs-6 text-white fw-normal"
            to="/"
            onClick={this.handleMenuClick}
          >
            Logout
          </Link>
        </li>,
      ];
    } else {
      menuItems = [
        // Render the menu items for non-logged-in users
        <li className="nav-item me-4" key="login">
          <Link className="nav-link fs-6 text-white fw-normal" to="/login">
            Login
          </Link>
        </li>,
        <li className="nav-item me-4" key="register">
          <Link className="nav-link fs-6 text-white fw-normal" to="/register">
            Register
          </Link>
        </li>,
      ];
    }

    return (
      <div style={{ fontFamily: "Bodoni Moda, serif" }}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
          <div className="container" ref={(ref) => (this.navbarRef = ref)}>
            <Link
              className="navbar-brand fs-2 fw-bold text-white me-5"
              to={logoLink}
            >
              KYN
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              onClick={this.toggleNavbar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${
                this.state.isNavbarOpen ? "show" : ""
              }`}
            >
              <ul className="navbar-nav ms-auto">{menuItems}</ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
