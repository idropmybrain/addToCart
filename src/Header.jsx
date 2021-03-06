import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'



const Header = (props) => {
  const clearCart = () => {
    sessionStorage.clear();
  }
  return (
      <div class="d-flex bd-highlight mb-3 container">
        <div class="p-2 bd-highlight p-3"><Link to="/">
          Home
          <i class="fa fa-th-list pl-3" aria-hidden="true"></i>
        </Link></div>
        <div class="p-2 bd-highlight p-3"><Link to="/cart">
          Cart
          <i class="fa fa-shopping-cart pl-3" aria-hidden="true"></i>
        </Link></div>
        {/* <div class="ml-0 p-2 bd-highlight p-3">Hello</div> */}
        <div class="ml-auto p-2 bd-highlight p-3"><span className="px-3">Hello {props.userName}</span><Link to="/" onClick={()=>clearCart() } >
          Clear Cart
          <i class="fa fa-trash pl-3" aria-hidden="true"></i>
        </Link></div>
      </div>
  );
} 

const mapStateToProps = (state) => ({
  userName: state.login.name || ''
})


export default connect(mapStateToProps,)(Header)

// export default Header;