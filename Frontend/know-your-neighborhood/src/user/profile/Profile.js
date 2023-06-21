import React, { Component } from "react";
import "../../assets/css/Profile.css";
import axios from "axios";
import { Link } from "react-router-dom";
class Profile extends Component {
  state = {
    user: {
      name: "",
      username: "",
      password: "",
      email: "",
    },
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser = async () => {
    const { currentUser } = this.props;
    try {
      const result = await axios.get(
        `http://localhost:8080/api/auth/userDetails/${currentUser.userId}`
      );
      this.setState({ user: result.data });
    } catch (error) {
      console.error("Error loading user:", error);
    }
  };
  

  render() {
    const { user } = this.state;
    return (
      <div className="container-xl px-4 mt-4 min-vh-100" style={{ fontFamily: "'Roboto Slab', serif" }}>
        {/* Account page navigation */}
        <nav className="nav nav-borders"></nav>
        <hr className="mt-5 mb-4" />
        <div className="row mt-5">
          <div className="col-xl-4">
            {/* Profile picture card */}
            <div className="card mb-4 mb-xl-0">
              <div className="card-header fs-4">Profile Picture</div>
              <div className="card-body text-center">
                {/* Profile picture image */}
                <img
                  className="img-account-profile rounded-circle mb-3"
                  src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                />
                {/* Profile picture help block */}
                <div className=" font-italic text-muted mb-4 fs-5">
                  <div>{user.name}</div>
                  <div>{user.email}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            {/* Account details card */}
            <div className="card mb-4">
              <div className="card-header fs-4">Account Details</div>
              <div className="card-body">
                <form>
                  {/* Form Row */}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (Full name) */}
                    <div className="col-md-6">
                      <label className=" mb-2 fs-6" htmlFor="name">
                        Full Name
                      </label>
                      <div className="form-control fs-6">
                      {user.name}
                      </div>
                    </div>
                    {/* Form Group (username) */}
                    <div className="col-md-6">
                      <label className=" mb-2 fs-6" htmlFor="username">
                        Username
                      </label>
                      <div className="form-control fs-6">
                      {user.username}
                      </div>
                    </div>
                  </div>
                  {/* Form Row */}

                  {/* Form Group (email address) */}
                  <div className="mb-3">
                    <label className="fs-6 mb-2" htmlFor="inputEmailAddress">
                      Email address
                    </label>
                    <div className="form-control fs-6">
                    {user.email}
                    </div>
                  </div>

                  {/* Save changes button */}
                  <Link className="btn btn-primary btn-lg" to={"/home"}>
                    Go Back
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
