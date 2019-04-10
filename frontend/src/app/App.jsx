import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import GlobalStyle from '../theme/globalStyle';
import Home from './home';

export const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Router history={history}>
          <div>
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
