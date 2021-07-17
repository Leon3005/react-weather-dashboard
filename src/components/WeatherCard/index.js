const WeatherCard = (props) => {
  const iconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  return (
    <div className="pt-4">
      <div className="card col-sm-12 col-md-10 weatherCard">
        <div className="card-header">{props.data.name}</div>
        <div className="card-body">
          <img src={iconUrl} alt="Weather Icon" />
          <p className="card-text">Temperature: {props.data.main.temp} °C </p>
          <p className="card-text">Humidity: {props.data.main.humidity}%</p>
          <p className="card-text">Wind Speed: {props.data.wind.speed} m/h</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
