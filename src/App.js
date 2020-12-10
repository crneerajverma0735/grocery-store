import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Home from "./components/home/Home";
import Navbars from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Product from "./components/product/Product";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className='container-fluid main'>
      <Router>
        <Navbars />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/product' component={Product} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
