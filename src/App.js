import React, { useEffect } from 'react';

import './App.css';
import Header from './Header'
import HOME from './HOME';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from 'firebase';
import { useStatevalue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js"
import { Elements} from "@stripe/react-stripe-js"

const promise = loadStripe(
  "pk_test_51HQHGIA7cYE6dAMbnDGCJ00bVuXQgRSzzXBlZRSDBQSJZ1zWwFv1kqK1fd2Yao3l1poFOP5UjcItVUFn3QRGRHkg008yHqYta5"
);
function App() {
  const [{basket}, dispatch] = useStatevalue();

  useEffect(() =>{
    auth().onAuthStateChanged(authUser =>{
      console.log('The user is >>>', authUser);
      if(authUser){
        //the user is signed in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //The use logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  },[])
 
  return (
    <Router>
    <div className="app">
    
      <Switch>
      <Route path="/checkout">   
      <Header/>
        <Checkout/>
        
        </Route>
        <Route path="/Login">
        <Login/>
      </Route>
      <Route path="/payment">
      <Header/>
      <Elements stripe={promise}>
        <Payment/>
        </Elements>
      </Route>
      <Route path="/">
      <Header/>   
        <HOME/>
      </Route>
      
      </Switch>      
     </div>
    </Router>
  );
}

export default App;
