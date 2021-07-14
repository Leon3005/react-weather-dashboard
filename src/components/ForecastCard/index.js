const ForecastCard = (props) => {
  // const iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  // const date = new Date(props.dt * 1000).toLocaleDateString("en-gb");

  return (
    <div className="pt-4">
      <div className="card col-sm-12 col-md-10 weatherCard">
        <div className="card-header">{props.data.humidity}</div>
        <div className="card-body">
          {/* <img src={iconUrl} />
          <p className="card-text">Temperature: {props.data.main.temp} °C </p>
          <p className="card-text">Humidity: {props.data.main.humidity}</p>
          <p className="card-text">Wind Speed: {props.data.wind.speed}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
