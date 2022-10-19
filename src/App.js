import "./App.css";
import { Routes as Switch, Route, Link } from "react-router-dom";
import Workexprinces from "./components/Workexprinces/Workexprinces";
import { Fragment } from "react";
import ForEmpolyies from "./components/ForEmpolyies/ForEmpolyies";

const HomePage = () => {
  return (
    <div className="flex justify-between w-56 text-blue">
      {" "}
      <Link to="/Workexperience">Workexperience</Link>
      <Link to="/forempolyies">ForEmpolyies</Link>
    </div>
  );
};

function App() {
  return (
    <Fragment>
      {/* <Router> */}
      <Switch>
        <Route path="/Workexperience" exact element={<Workexprinces />} />
        <Route path="/forempolyies" exact element={<ForEmpolyies />} />
        <Route path="/" exact element={<HomePage />} />
        <Route path="/" exact element={<HomePage />} />
        <Route path="/" exact element={<HomePage />} />
      </Switch>
      {/* </Router> */}
    </Fragment>
  );
}

export default App;
