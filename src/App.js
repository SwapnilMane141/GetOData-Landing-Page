import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";

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
      </Switch>
    </Layout>
  );
}

export default App;
