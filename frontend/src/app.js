import React, { Component, Fragment } from "react";

import "./reset.css";
import "./app.scss";

export default function App() {
  return (
    <Fragment>
      <Home />
    </Fragment>
  );
}

// routes
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignUpOpen: false,
      isLogInOpen: false
    };

    this.openLogIn = this.openLogIn.bind(this);
    this.openSignUp = this.openSignUp.bind(this);
    this.closeLogIn = this.closeLogIn.bind(this);
    this.closeSignUp = this.closeSignUp.bind(this);
  }

  openLogIn() {
    this.setState({ isLogInOpen: true });
  }

  openSignUp() {
    this.setState({ isSignUpOpen: true });
  }

  closeLogIn() {
    this.setState({ isLogInOpen: false });
  }

  closeSignUp() {
    this.setState({ isSignUpOpen: false });
  }

  renderModal() {
    if (this.state.isLogInOpen) {
      return <LogIn closeLogIn={this.closeLogIn} />;
    } else if (this.state.isSignUpOpen) {
      return <SignUp closeSignUp={this.closeSignUp} />;
    }
  }

  render() {
    return (
      <div>
        {this.renderModal()}
        <nav>
          <div className="wrapper">
            <h1 className="logo">Trebor</h1>
            <div>
              <button className="btn" onClick={this.openLogIn}>
                Log In
              </button>
              <button className="btn" onClick={this.openSignUp}>
                Sign Up
              </button>
            </div>
          </div>
        </nav>
        <section>
          <div className="wrapper">
            <div>
              <h1>
                Trebor lets you work more collaboratively and get more done.
              </h1>
              <p>
                Trebor’s boards, lists, and cards enable you to organize and
                prioritize your projects in a fun, flexible, and rewarding way.
              </p>
              <button className="btn">Sign Up - It's Free!</button>
            </div>
            <img src="https://picsum.photos/500/300" alt="hero" />
          </div>
        </section>
      </div>
    );
  }
}
//

class SignUp extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <h1>Sign Up</h1>
            <button onClick={this.props.closeSignUp}>close</button>
          </div>
        </div>
      </div>
    );
  }
}

class LogIn extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <h1>Log In</h1>
            <button onClick={this.props.closeLogIn}>close</button>
          </div>
        </div>
      </div>
    );
  }
}
