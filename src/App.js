import { Component } from "react";

import RecentCities from "./components/RecentCities";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Header from "./components/Header";
import ForecastCard from "./components/ForecastCard";

import fetchData from "./utils/fetchData";

import "./App.css";

let recentCities = [];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: "London",
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
        oneCallParams: {
          lat: data.coord.lat,
          lon: data.coord.lon,
          appid: "60b4fb66103f9e3c6f93920a7d7f1377",
          units: "metric",
        },
      });
    }

    const { data: oneCallData, error: oneCallError } = await fetchData(
      "https://api.openweathermap.org/data/2.5/onecall",
      this.state.oneCallParams
    );

    if (oneCallData) {
      this.setState({
        oneCallData,
        error: null,
        oneCallError: null,
      });
    }

    if (error || oneCallError) {
      this.setState({
        oneCallError,
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

    this.setState({
      recentCities: localStorage.getItem("recentCities"),
    });
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
      return <h1>Error finding city!</h1>;
    }
  }

  renderFiveDayForecast() {
    const { oneCallData, oneCallError } = this.state;

    if (oneCallData && !oneCallError) {
      return oneCallData.daily
        .map((day) => {
          return <ForecastCard data={day} />;
        })
        .slice(0, 5);
    } else if (!oneCallData && oneCallError) {
      return <h1>Error finding forecast!</h1>;
    }
  }

  onClick = async (event) => {
    await this.setState({
      cityName: event.target.innerText,
    });

    await this.getWeatherData();
  };

  renderRecentCities = () => {
    const parseRecentCities = JSON.parse(localStorage.getItem("recentCities"));

    if (parseRecentCities) {
      return (
        <RecentCities recentCities={parseRecentCities} onClick={this.onClick} />
      );
    } else {
      return <RecentCities recentCities={["Waiting..."]} />;
    }
  };

  render() {
    return (
      <div className="App">
        <Header title="Weather Dashboard" />
        <div className="row main g-0 ">
          {this.renderRecentCities()}
          <div className="col-sm-12 col-md-9 pt-3 px-4 text-center">
            <SearchBar
              placeholder="Please enter a city..."
              onSubmit={this.onSubmit}
              onChange={this.onChange}
            />
            {this.renderWeatherCard()}
            <div className="row main g-0 forecast">
              {this.renderFiveDayForecast()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
