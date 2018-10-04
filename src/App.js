import React, { Component } from 'react';
import './styles/main.css';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import ATestHeader from './components/ATestHeader/ATestHeader';
import AuthMe from './components/AuthMe/AuthMe';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AuthMe />
          <ATestHeader />
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
