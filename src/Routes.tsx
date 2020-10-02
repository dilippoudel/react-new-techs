import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Countries from './pages/Countries'

import Home from './pages/Home'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/countries/:name" component={Countries} />
  </Switch>
)

export default Routes
