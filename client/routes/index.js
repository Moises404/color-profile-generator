import React from 'react'
import { Route, Router, browserHistory, IndexRoute } from 'react-router'

import {
  AppContainer,
  HomeContainer,
  AboutContainer,
  MapContainer
} from '../containers'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={HomeContainer}/>
      <Route path="about" component={AboutContainer}/>
      <Route path="map" component={MapContainer}/>
    </Route>
  </Router>
)
