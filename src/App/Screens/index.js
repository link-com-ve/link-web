import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import HomeScreen from './HomeScreen'
// import ContactScreen from './ContactScreen'

const Screens = () => {
  return (
    <Switch>
      <Route path="/home" component={HomeScreen}/>
      {/* <Route path="/contact" component={ContactScreen}/> */}
      <Route path="/" component={() => <Redirect to={'/home'} />} />
    </Switch>
  )
}

export default Screens