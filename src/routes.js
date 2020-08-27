import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import {Home, Sobre, Geracoes} from './components'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sobre" component={Sobre} />
      <Route exact path="/geracoes" component={Geracoes} />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export {Routes}
