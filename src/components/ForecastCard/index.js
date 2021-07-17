const ForecastCard = (props) => {
  // const iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  const date = new Date(props.data.dt * 1000).toLocaleDateString("en-gb");

  return (
    <div className="mt-4 me-4 w-25 card col-sm-12 col-md-10 forecastCard">
      <div className="card-header">{date}</div>
      <div className="card-body">
        {/* <img src={iconUrl} />
          <p className="card-text">Temperature: {props.data.main.temp} °C </p>
          <p className="card-text">Humidity: {props.data.main.humidity}</p>
          <p className="card-text">Wind Speed: {props.data.wind.speed}</p> */}
      </div>
    </div>
  );
};

export default ForecastCard;
