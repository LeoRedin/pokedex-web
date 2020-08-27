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

import {Footer, Header} from './components'

import {Routes} from './routes'

library.add(faSortAmountUp, faSortAlphaDown, faHome, faInfo, faSignOutAlt)

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  )
}

export default App
