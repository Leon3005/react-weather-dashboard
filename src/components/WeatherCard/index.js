const WeatherCard = (props) => {
  return (
    <div className="pt-4">
      <div className="card col-sm-12 col-md-10">
        <div className="card-header">{props.data.name}</div>
        <div className="card-body">
          <p className="card-text">Temperature: {props.data.main.temp} °C </p>
          <p className="card-text">Humidity: {props.data.main.humidity}</p>
          <p className="card-text">Wind Speed: {props.data.wind.speed}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
