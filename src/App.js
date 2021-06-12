import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import AddScreen from './screens/AddScreen';


function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(()=> {
   const unsubscribe = auth.onAuthStateChanged(userAuth => {
    if (userAuth) {
      dispatch(login({
        uid: userAuth.uid,
        email: userAuth.email,
      }))
    } else {
      dispatch(logout());
    }
    })
    return unsubscribe;
  },[dispatch]);

  return (
    <div className="app">
      <Router >
        {!user ? (
          <LoginScreen />
        ) : (
        <Switch>
          <Route path="/pro">
            <ProfileScreen />
          </Route>
          <Route path="/add">
            <AddScreen />
          </Route>
          <Route path="/mylist">
            <AddScreen />
          </Route>
          <Route path="/watched">
            <AddScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
