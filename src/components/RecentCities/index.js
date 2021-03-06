import { v4 as uuidv4 } from "uuid";

const RecentCities = (props) => {
  const renderLi = () => {
    return props.recentCities.map((city) => {
      return (
        <li
          className="list-group-item recentCity"
          onClick={props.onClick}
          key={uuidv4()}
        >
          {city}
        </li>
      );
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
