import "../components/App.css";
import "leaflet/dist/leaflet.css";
// import "./App.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Home from "../components/home/home";

// import Signin from "../components/signin/signin";
// import Signup from "../components/signup/signup";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//routing
import PrivateRoute from "./routing/PrivateRoute";

//Screens
import PrivateScreen from "./screens/PrivateScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "../components/screens/SignupScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
        <PrivateRoute exact path="/" component={PrivateScreen} />
        <Route exact path="/home" component={Home} />

        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/signup" component={SignupScreen} />
        <Route exact path="/forgotpassword" component={ForgotPasswordScreen} />
        <Route
          exact
          path="/passwordreset/:resetToken"
          component={ResetPasswordScreen}
        />
        {/* <Route exact path="/profile" component={Profile} /> */}
        {/* <Route exact path="/prevention" component={Prevention} /> */}
      </Switch>
    </main>

    <Footer />
  </BrowserRouter>
);

export default App;
