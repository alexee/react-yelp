import React from 'react'
import createReactClass from 'create-react-class'
import {browserHistory, Router, Route, Redirect} from 'react-router'

import makeMainRoutes from './views/Main/routes'

export const makeRoutes = () => {
  const main = makeMainRoutes();
  return (
    <Router>
      <Route path=''>
        {main}
      </Route>
      <Redirect from="*" to="/" />
    </Router>
  )
}

export default makeRoutes
