
import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import "../../assets/css/style-logingoogle.css"
class Google extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    this.setState({
      user: userObject,
    });
    // document.getElementById("signInDiv").hidden = true;
  }

  handleSignOut = (event) => {
    this.setState({
      user: null,
    });
    document.getElementById("signInDiv").hidden = false;
  }

  componentDidMount() {
    /* global google */
    google.accounts.id.initialize({
      client_id: "487533665057-4prs5uet2k5ja454f7la94p7k7036o22.apps.googleusercontent.com",
      callback: this.handleCallbackResponse
    });
  
    setTimeout(() => {
      const signInDiv = document.getElementById("signInDiv");
      if (signInDiv) {
        google.accounts.id.renderButton(
          signInDiv,
          { theme: "outline", size: "large" }
        );
      }
    }, 100);
  }
  
  

  render() {
    const { user } = this.state;
  
    return (
      <div className='container-fluid d-flex justify-content-center align-items-center min-vh-100'>
        <div className="card google-card" style={{ fontFamily: "'Roboto Slab', serif" }}>
          <div className="card-body d-flex justify-content-center align-items-center m-5">
            {user ? (
              <React.Fragment>
                <div style={{ marginTop: "200px" }}>
                  <button onClick={this.handleSignOut}>Sign Out</button>
                  <div>
                    <img src={user.picture} alt='user profile' />
                    <h3>Hello, {user.name}</h3>
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h2 className="card-title text-center me-5">Login with Google</h2>
                <div id="signInDiv"></div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }

}  

export default Google;
