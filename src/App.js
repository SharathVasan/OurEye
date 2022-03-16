//Dependencies imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Local imports
import DashboardLayout from "./Layouts/DashboardLayout";
import HygineLayout from "./Layouts/HygineLayout";

// Style imports
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <DashboardLayout />
          </Route>
          <Route exact path="/hygine">
            <HygineLayout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
