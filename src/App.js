import JobContextProvider from "./context/JobContext";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AppContextProvider from "./context/AppContext";
import JobDetaile from "./components/JobDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <JobContextProvider>
          <Navbar />
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/job-datails/:uri">
                <JobDetaile />
              </Route>
            </Switch>
          </Router>
        </JobContextProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
