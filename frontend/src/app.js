import React, { Component, Fragment } from "react";

import "./reset.css";
import "./app.scss";

export default function App() {
  return (
    <Fragment>
      <Home />
      <Modal />
    </Fragment>
  );
}

// ROUTES
function Home() {
  return (
    <div>
      <nav>
        <div className="wrapper">
          <h1 className="logo">Trebor</h1>
          <div>
            <button className="btn">Log In</button>
            <button className="btn">Sign Up</button>
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
//

class Modal extends Component {
  render() {
    return <div>hello modal</div>;
  }
}
