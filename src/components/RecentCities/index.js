const RecentCities = (props) => {
  const renderLi = () => {
    return props.recentCities.map((city) => {
      return <li className="list-group-item">{city}</li>;
    });
  };

  return (
    <div className="col-sm-12 col-md-3">
      <div>
        <ul className="list-group p-3 text-center">{renderLi()}</ul>
      </div>
    </div>
  );
};

export default RecentCities;
