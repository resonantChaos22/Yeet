//  IMPORTING LIBRARIES AND COMPONENTS
import React from "react";

import Header from './Header';
import Navbar from './Navbar';
import Para1 from './Para1';
import Para2 from './Para2';

import "../styles/app.css";

//  DEFINING AND EXPORTING COMPONENT
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Para1 />
        <Para2 />
      </div>
    );
  }
}
