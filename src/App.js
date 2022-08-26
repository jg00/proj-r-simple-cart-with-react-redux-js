import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// import cartItems from "./cart-items";

import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";

/* Moved to reducer
const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 5,
};
*/

/*
1 Another way to set up reducers is to split them up along with their own slices of state
2 Add redux devtools extension
*/
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Note that we can pass in initialStore but can also be done directly in the reducer and combined here.
// const store = createStore(reducer, initialStore); // We get back store.getState(), store.dispatch()

// react-redux - Provider wraps app, connect used in components

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
