import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/images/favicon.png"
import '../assets/background/style-bg.css';

class AllStore extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = async () => {
    try {
      const token = localStorage.getItem("accessToken"); // Assuming the access token is stored in localStorage
      const headers = {
        Authorization: "Bearer " + token,
      };
      const result = await axios.get("http://localhost:8080/api/auth/showStores", { headers });
      this.setState({ users: result.data });
    } catch (error) {
      if (error.response && error.response.status === 403) {
        // Redirect to 403 page
        this.props.history.push("/403");
      } else {
        console.error('Error loading users:', error);
      }
    }
  };

  deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/auth/deletestore/${id}`);
      this.loadUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  render() {
    const { users } = this.state;

    return (
      <div className="bg container-fluid min-vh-100">
        <div className="container justify-content-center align-items-center">
          <div className="row">
            <div className="card text-black mt-5 mb-5 shadow" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-3 ms-5">
                <div className="row justify-content-center">
                  <h1 className="pb-4 text-center text-primary" style={{ fontFamily: "'Roboto Slab', serif" }}>
                    View | All Stores
                  </h1>
                </div>
                <div className="col-lg-12">
                  <div className="main-box no-header clearfix">
                    <div className="main-box-body clearfix">
                      <div className="table-responsive">
                        <table className="table user-list">
                          <thead>
                            <tr className='fs-4' style={{ fontFamily: "'Open Sans', sans-serif" }}>
                              <th scope="col">#</th>
                              <th scope="col"></th>
                              <th scope="col">Store Name</th>
                              <th scope="col">Phone Number</th>
                              <th scope="col">Address</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {users.map((user, index) => (
                              <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                  <img
                                    src={logo} 
                                    className="rounded"
                                    style={{ width: "100px", height: "100px" }}
                                    alt=""
                                  />
                                </td>
                                <td className='fs-5' style={{ fontFamily: "'Open Sans', sans-serif" }}>{user.storeName}</td>
                                <td className='fs-5' style={{ fontFamily: "'Open Sans', sans-serif" }}>{user.contactno}</td>
                                <td className='fs-5' style={{ fontFamily: "'Open Sans', sans-serif" }}>{user.address}</td>
                                <td>
                                  <Link
                                    className="btn btn-primary mx-2 btn-lg"
                                    to={`/viewstore/${user.id}`}
                                  >
                                    View
                                  </Link>

                                  <Link
                                    className="btn btn-outline-success mx-2 btn-lg"
                                    to={`/edituser/${user.id}`}
                                  >
                                    Edit
                                  </Link>

                                  <button
                                    className="btn btn-danger mx-2 btn-lg"
                                    onClick={() => this.deleteUser(user.id)}
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllStore;