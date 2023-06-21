import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import '../../assets/css/style-loginfb.css'; // Import custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

class LoginFB extends Component {
  state = {
    user: null, // Initialize user state as null
    redirectToLogin: false, // Initialize redirect state as false
  };

  responseFacebook = (response) => {
    console.log(response);
    this.setState({ user: response }); // Store user details in the component's state
  };

  handleLogout = () => {
    this.setState({ user: null, redirectToLogin: true }); // Clear the user state and set redirect to true on logout
  };

  render() {
    const facebookAppId = '942326777036022'; // Replace with your Facebook App ID
    const { user, redirectToLogin } = this.state; // Retrieve user details and redirect state from state

    // Redirect to login page if redirectToLogin is true
    if (redirectToLogin) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
        <div className="card border-primary custom-card">
          <div className="card-body text-center">
            {user ? (
              // Render user information if the user is logged in
              <div className='m-3' style={{ fontFamily: "'Roboto Slab', serif" }}>
                <h2 className=' mb-4'>Welcome, {user.name}!</h2>
                <img src={user.picture.data.url} className='profile-image mb-5' alt="Profile" />
                <p>Email: {user.email}</p>
                <button className="btn btn-primary btn-lg" onClick={this.handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              // Render Facebook login button if the user is not logged in
              <div className='m-5'>
                <h2 style={{ fontFamily: "'Roboto Slab', serif" }}>Login with Facebook</h2>
                <div className="text-center">
                  <FacebookLogin
                    appId={facebookAppId}
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    cssClass="facebook-button" // Assign custom CSS class to the button
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default LoginFB;
