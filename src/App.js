import React from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import GlobalStyle from './Components/GlobalStyle';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

function App() {
  return(  
      <div>
        <GlobalStyle />
        <Nav />
        <Switch>
          <Route path='/' exact >
            <About />
          </Route>
          <Route path='/portfolio' exact >
            <Portfolio />
          </Route>
          <Route path='/contact' exact >
            <Contact />
          </Route>
        </Switch> 
        {/* <Footer /> */}
      </div>
  )
}

export default App;

