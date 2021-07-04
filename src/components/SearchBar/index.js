const SearchBar = (props) => {
  return (
    <div className="search">
      <form onSubmit={props.onSubmit} onChange={props.onChange}>
        <div className="row h-100">
          <div className="col-sm-12 col-md-10">
            <input
              type="text"
              className="form-control"
              id="search-city"
              placeholder={props.placeholder}
            />
          </div>
          <div className="col-sm-12 col-md-2 text-center">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
