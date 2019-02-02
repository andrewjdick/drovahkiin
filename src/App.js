import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { fetchRequest } from "./api/fetchRequest";

class App extends Component {
  state = {
    location: "London, Uk",
    max_distance: 50,
    number_of_months: 12,
    number_of_weeks: 52,
    order_by: "price",
    order_direction: "asc",
    page: 1,
    per_page: 15,
    price_max: 2500,
    price_min: 100,
    rolling: false,
    start_date: "09/09/2018",
    vehicle_type: "Consumer"
  };

  componentDidMount() {
    console.log(
      "Fetch Component",
      fetchRequest({
        url: "web/vehicles",
        method: "POST",
        body: this.state
      })
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
