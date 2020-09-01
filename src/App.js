import React from 'react'
import './App.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserCircle, faSearch} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import {useSelector, useDispatch} from 'react-redux'
import {Layout, RoutesLayout, Header} from 'components'

import {Routes} from './routes'

library.add(faUserCircle, faSearch)

function App() {
  const history = createBrowserHistory()
  const userAuthenticated = useSelector(store => store.auth.isAuthenticated)
  const dispatch = useDispatch()

  function login() {
    dispatch({type: 'LOGIN', payload: {username: 'Leonardo'}})
  }

  return userAuthenticated ? (
    <Router history={history}>
      <Layout>
        <Header />
        <RoutesLayout>
          <Routes />
        </RoutesLayout>
      </Layout>
    </Router>
  ) : (
    <button onClick={login}>LOGIN</button>
  )
}

export default App
