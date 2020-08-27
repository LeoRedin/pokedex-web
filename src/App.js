import React from 'react'
import './App.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faSortAmountUp,
  faSortAlphaDown,
  faHome,
  faInfo,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router} from 'react-router-dom'

import {Layout, Footer, Header} from 'components'

import {Routes} from './routes'

library.add(faSortAmountUp, faSortAlphaDown, faHome, faInfo, faSignOutAlt)

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Routes />
        <Footer />
      </Layout>
    </Router>
  )
}

export default App
