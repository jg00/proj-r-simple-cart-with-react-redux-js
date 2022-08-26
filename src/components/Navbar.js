import React from "react";
import { connect } from "react-redux";

// connect is a HOC means it returns a component itself
// connect gives us the opportunity to pass state as props argument of our component

const Navbar = (props) => {
  // console.log("props:");
  // console.log(props); // {cart: Array(3), total: 0, amount: 5, dispatch: ƒ}

  const { amount } = props;

  return (
    <nav>
      <div className="nav-center">
        <h3>ReduxCart</h3>
        <div className="nav-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
          </svg>
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  // console.log("state:");
  // console.log(state); // cart: Array(3), total: 0, amount: 5}

  // we can return specific slices of data from state and must return plain object that is passed in as props argument to our component
  return {
    amount: state.amount,
  };
};

export default connect(mapStateToProps)(Navbar); // Now we have access to our 1. state/store (and map store to props argument of the component) and 2. dispatch method
