import React, {Component} from 'react';
import './App.css';

import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Portfolio from './components/Portfolio.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="app">
          <Header />
          <main>

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />

          </main>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;