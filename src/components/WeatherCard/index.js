const WeatherCard = () => {
  return (
    <div className="pt-4">
      <div class="card col-sm-12 col-md-10">
        <div class="card-header">City Name</div>
        <div class="card-body">
          <p className="card-text">Temperature:</p>
          <p className="card-text">Humidity: </p>
          <p className="card-text">Wind Speed: </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
