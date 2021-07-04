import { Component } from "react";

import RecentCities from "./components/RecentCities";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Header from "./components/Header";

import fetchData from "./utils/fetchData";

import "./App.css";

let recentCities = [];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: "Waiting...",
    };
  }

  async getWeatherData() {
    const params = {
      q: this.state.cityName,
      units: "metric",
      appid: "60b4fb66103f9e3c6f93920a7d7f1377",
    };

    const { data, error } = await fetchData(
      "http://api.openweathermap.org/data/2.5/weather",
      params
    );

    if (data) {
      this.setState({
        data,
        error: null,
      });
    }

    if (error) {
      this.setState({
        error,
        data: null,
      });
    }
  }

  onSubmit = async (event) => {
    event.preventDefault();

    await this.getWeatherData();

    recentCities.push(this.state.cityName);

    localStorage.setItem("recentCities", JSON.stringify(recentCities));
  };

  onChange = (event) => {
    this.setState({
      cityName: event.target.value,
    });
  };

  renderWeatherCard() {
    const { data, error } = this.state;

    if (data && !error) {
      return <WeatherCard data={data} />;
    } else if (!data && error) {
      return <h1>Error!</h1>;
    }
  }

  renderRecentCities() {
    const recentCities = JSON.parse(localStorage.getItem("recentCities"));

    if (recentCities) {
      return <RecentCities recentCities={recentCities} />;
    } else {
      return <RecentCities recentCities={["Waiting..."]} />;
    }
  }

  render() {
    return (
      <div className="App">
        <Header title="Weather Dashboard" />
        <div className="row main g-0 ">
          {this.renderRecentCities()}
          <div className="col-sm-12 col-md-9 pt-2 px-4">
            <SearchBar
              placeholder="Please enter a city..."
              onSubmit={this.onSubmit}
              onChange={this.onChange}
            />
            {this.renderWeatherCard()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
