import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";

import { getCurrentUser } from "../util/APIUtils";
import { ACCESS_TOKEN } from "../constant/index";

import Login from "../user/login/Login";
import Signup from "../user/signup/Signup";
import NotFound from "../common/NotFound";
import LoadingIndicator from "../common/LoadingIndicator";
import Navbar from "../common/Navbar";
import Home from "../common/Home";
import Footer from "../common/Footer";
import { Layout, notification } from "antd";
import LoginGoogle from "../user/login/LoginGoogle";
import Landing from "../common/Landing";
import Contact from "../common/Contact";
import About from "../common/About";
import TermsAndConditions from "../common/TermsAndConditions";
import ShowAllUser from "../user/AllUser/ShowAllUser";
import ShowAllStore from "../stores/ShowAllStore";
import NotAllowed from "../common/NotAllowed";
import ViewUser from "../user/AllUser/ViewUser";
import LoginFB from "../user/login/LoginFB";
import AddStore from "../stores/AddStore";
import ViewStores from "../stores/ViewStores";
import Register from "../user/signup/Register";
import Profile from "../user/profile/Profile";

const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: true,
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    notification.config({
      placement: "topRight",
      top: 70,
      duration: 3,
    });
  }

  loadCurrentUser() {
    getCurrentUser()
      .then((response) => {
        this.setState({
          currentUser: response,
          isAuthenticated: true,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
        });
      });
  }

  componentDidMount() {
    this.loadCurrentUser();
  }

  handleLogout(
    redirectTo = "/login",
    notificationType = "success",
    description = "You're successfully logged out."
  ) {
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false,
    });

    this.props.history.push(redirectTo);

    notification[notificationType]({
      message: "KYN App",
      description: description,
    });
  }

  handleLogin() {
    notification.success({
      message: "KYN App",
      description: "You're successfully logged in.",
    });
    this.loadCurrentUser();
    this.props.history.push("/");
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingIndicator />;
    }

    return (
      <Switch>
        <Layout className="app-container">
          <Navbar
            isAuthenticated={this.state.isAuthenticated}
            currentUser={this.state.currentUser}
            onLogout={this.handleLogout}
            userId={
              this.state.currentUser ? this.state.currentUser.userId : null
            }
          />

          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Landing} />

          <Route exact path="/signup" component={Signup} />
          <Route exact path="/loginfb" component={LoginFB} />
          <Route exact path="/logingoogle" component={LoginGoogle} />

          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/TAndC" component={TermsAndConditions} />
          <Route exact path="/users" component={ShowAllUser} />
          <Route exact path="/404" component={NotFound} />
          <Route exact path="/403" component={NotAllowed} />
          <Route exact path="/viewuser/:id" component={ViewUser} />
          <Route exact path="/addstore" component={AddStore} />
          <Route exact path="/stores" component={ShowAllStore} />
          <Route exact path="/viewstore/:id" component={ViewStores} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/userprofile/:id" component={Profile} />

          <Footer />
        </Layout>
      </Switch>
    );
  }
}

export default withRouter(App);
