import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

function App(props) {
  // G-PP3KBTNDH2
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/terms">
          <Terms></Terms>
        </Route>
        <Route path="/privacy">
          <Privacy></Privacy>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
