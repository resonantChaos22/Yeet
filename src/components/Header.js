//  IMPORTING LIBRARIES AND COMPONENTS
import React from "react";

import "../styles/header.css";

//  DEFINING AND EXPORTING COMPONENT
export default class Header extends React.Component {
  render() {
    return (
      <div className="head">
        <div class="ui container">
          <h1 class="ui center aligned header">See an online doctor today!</h1>
          <p className="ui header center aligned">Telehealth services with board-certified doctors</p>
        </div>
      </div>
    );
  }
}
