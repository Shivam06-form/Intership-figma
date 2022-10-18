import "./App.css";
import { Routes as Switch, Route, Link } from "react-router-dom";
import Workexprinces from "./components/Workexprinces/Workexprinces";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <div>
      {" "}
      <h3>HomePage</h3>
      <Link to="/Workexperience">Workexperience</Link>
    </div>
  );
};

function App() {
  return (
    <Fragment>
      {/* <Router> */}
      <Switch>
        <Route path="/Workexperience" exact element={<Workexprinces />} />
        <Route path="/" exact element={<HomePage />} />
        <Route path="/" exact element={<HomePage />} />
        <Route path="/" exact element={<HomePage />} />
        <Route path="/" exact element={<HomePage />} />
      </Switch>
      {/* </Router> */}
    </Fragment>
  );
}

export default App;
