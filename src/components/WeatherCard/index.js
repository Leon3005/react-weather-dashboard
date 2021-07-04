const WeatherCard = (props) => {
  return (
    <div className="pt-4">
      <div className="card col-sm-12 col-md-10">
        <div className="card-header">{props.name}</div>
        <div className="card-body">
          <p className="card-text">Temperature:</p>
          <p className="card-text">Humidity: </p>
          <p className="card-text">Wind Speed: </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
