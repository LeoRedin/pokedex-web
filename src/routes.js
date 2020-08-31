import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import {Home, Sobre, Geracoes, Pokemon} from 'components'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sobre" component={Sobre} />
      <Route exact path="/geracoes" component={Geracoes} />
      <Route exact path="/pokemon/:id" component={Pokemon} />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export {Routes}
