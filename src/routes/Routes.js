import React from 'react'
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import Repository from '../pages/Repository/Repository'

export default function Routes() {
  return (
    <BrowserRouter> 
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/repositories/:repository+" component={Repository} />
        <Redirect from="*" to="/" /> 
      </Switch>
    </BrowserRouter>
  )
}
