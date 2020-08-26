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

import {Footer, Header, Main} from './components'

library.add(faSortAmountUp, faSortAlphaDown, faHome, faInfo, faSignOutAlt)

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
