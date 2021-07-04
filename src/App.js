import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header d-flex align-items-center justify-content-center p-3">
        <h1>Weather Dashboard</h1>
      </div>
      <div className="row main g-0 ">
        <div className="col-sm-12 col-md-3">
          <div>
            <ul className="list-group p-3 text-center">
              <li class="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Morbi leo risus</li>
              <li class="list-group-item">Porta ac consectetur ac</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md-9">
          <div className="search p-2 ">
            <form>
              <div className="row h-100">
                <div className="col-sm-12 col-md-10 pt-2 px-4">
                  <input
                    type="text"
                    className="form-control"
                    id="search-city"
                  />
                </div>
                <div className="col-sm-12 col-md-2 pt-2">
                  <button type="submit" className="btn btn-primary">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
