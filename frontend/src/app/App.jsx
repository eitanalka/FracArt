import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../theme/globalStyle';
import theme from '../theme/theme';
import { authOperations } from './duck';
import { Particles, Header } from './common';
import Home from './home';
import Profile from './profile';
import Create from './create';
import Tree from './create/tree';

export const history = createBrowserHistory();

const RoutesWrapper = styled.div`
  position: absolute;
`;

class App extends Component {
  componentDidMount() {
    const googleToken = localStorage.getItem('googleToken');
    this.props.googleSignIn(googleToken);
  }

  render() {
    const { isLoggedIn, googleSignInRequestSent, isLoggedOut } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Router history={history}>
            <Particles />
            <RoutesWrapper>
              <Header history={history}/>
              {(googleSignInRequestSent || isLoggedOut) && (
                <Route exact path="/" component={isLoggedIn ? Create : Home} />
              )}
              <Route exact path="/profile" component={isLoggedIn ? Profile : Home} />
              <Route exact path="/create" component={Create} />
              <Route exact path="/create/tree" component={Tree} />
              <Route exact path="/create/tree/:id" component={Tree} />
            </RoutesWrapper>
          </Router>
        </React.Fragment>
      </ThemeProvider>
    );
  }
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  isLoggedOut: state.auth.isLoggedOut,
  googleSignInRequestSent: state.auth.googleSignInRequestSent,
});

const mapDispatchToProps = dispatch => ({
  googleSignIn: googleToken => dispatch(authOperations.googleSignIn(googleToken)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
