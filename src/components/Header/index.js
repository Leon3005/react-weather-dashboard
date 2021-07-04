const Header = (props) => {
  return (
    <div className="header d-flex align-items-center justify-content-center p-3">
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;
