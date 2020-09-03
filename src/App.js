import React from 'react'
import './App.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserCircle, faSearch} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import {Layout, RoutesLayout, Header} from 'components'

import {Routes} from './routes'

library.add(faUserCircle, faSearch)

function App() {
  const history = createBrowserHistory()

  return (
    <Router history={history}>
      <Layout>
        <Header />
        <RoutesLayout>
          <Routes />
        </RoutesLayout>
      </Layout>
    </Router>
  )
}

export default App
