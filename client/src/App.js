import './App.css';
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import ContactState from './context/contact/ContactState'


const App = () => {
  return (
    <ContactState>
      <Router>
        <div className="App">
          <Fragment >
            <Navbar />
          </Fragment>
          <div className='container'>
            <Switch >
              <Route exact ='/' component={Home} />
              <Route exact ='/' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </ContactState>
  );
}

export default App;
