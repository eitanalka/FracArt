import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../theme/globalStyle';
import theme from '../theme/theme';
import Home from './home';

export const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Router history={history}>
            <div>
              <Route exact path="/" component={Home} />
            </div>
          </Router>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
