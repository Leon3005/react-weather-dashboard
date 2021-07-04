import { Component } from "react";

import RecentCities from "./components/RecentCities";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Header from "./components/Header";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: "Birmingham",
    };
  }

  onSubmit(event) {
    event.preventDefault();

    console.log("test submit");
  }

  render() {
    return (
      <div className="App">
        <Header title="Weather Dashboard" />
        <div className="row main g-0 ">
          <RecentCities />
          <div className="col-sm-12 col-md-9 pt-2 px-4">
            <SearchBar
              placeholder="Please enter a city..."
              onSubmit={this.onSubmit}
            />
            <WeatherCard name={this.state.cityName} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
