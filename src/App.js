import RecentCities from "./components/RecentCities";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row main g-0 ">
        <RecentCities />
        <div className="col-sm-12 col-md-9 pt-2 px-4">
          <SearchBar />
          <WeatherCard />
        </div>
      </div>
    </div>
  );
}

export default App;
