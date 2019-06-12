import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Cart from './Cart';

function App() {
  return (
    <Router>
      <div>
        <Header/>

        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </div>
    </Router>
  );
}



function Header(props) {
  const clearCart = () => {
    sessionStorage.clear();
  }
  return (
      <div class="d-flex bd-highlight mb-3">
        <div class="p-2 bd-highlight p-3"><Link to="/">Home</Link></div>
        <div class="p-2 bd-highlight p-3"><Link to="/cart">Cart</Link></div>
        <div class="ml-auto p-2 bd-highlight p-3"><Link to="/" onClick={()=>clearCart() } >Clear Cart</Link></div>
      </div>
  );
}

export default App;