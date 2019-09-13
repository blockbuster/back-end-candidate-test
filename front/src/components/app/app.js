import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Product from '../product'
import Program from '../program'
import Transaction from '../transaction'
import User from '../user'
import SaveFile from '../save-file'

import ErrorBoundry from '../error-boundry'
import Header from '../header'
import Main from '../main'


const App = () => {
  return (
    <ErrorBoundry>
      <Router>
        <Header/>
        <hr/>
        <Route path= '/' component={Main} exact />

        <Route path= '/users' component={User}/>

        <Route path= '/products' component={Product}/>

        <Route path= '/programs' component={Program}/>

        <Route path= '/transactions' component={Transaction}/>

        <Route path= '/save-file' component={SaveFile} exact/>

      </Router>
    </ErrorBoundry>
  )
}

export default App
