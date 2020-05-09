//  IMPORTING LIBRARIES AND COMPONENTS
import React from "react";

import "../styles/navbar.css";

//  DEFINING AND EXPORTING COMPONENT
export default class Navbar extends React.Component {
  render() {
    return (
      <div className="nav">
        <div class="navbar">
          <div class="left">
            <div class="ui secondary pointing menu">
              <a class="item ui big header">GoodPx</a>
              <a class="active item ui big header">Drug Savings</a>
              <a class="item ui big header">Doctor Visits</a>
            </div>
          </div>
          <div class="right">
            <div class="ui secondary pointing menu">
              <a class="item ui big header">Mobile App</a>
              <a class="item ui big header">Discount Card</a>
              <a class="item ui big header">Help</a>
              <a class="item ui big header">Sign in</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
