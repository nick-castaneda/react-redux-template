// Import React, redux, and react-redux for this 'Smart' Component
// 'dumb' components only use react
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

// import all the components and actions this container will use.
import Routes from './Routes';
import { login } from '../actions/auth';

class App extends React.Component {
  componentDidMount() {
    this.props.login();
  }

  render() {
    const { username } = this.props;
    if (username) {
      return <Routes />;
    }

    return <p>You are logged out</p>;
  }
}

App.propTypes = {
  login: PropTypes.func.isRequired,
  username: PropTypes.string,
};

App.defaultProps = {
  username: null,
};

// Data
const mapStateToProps = (state) => {
  // Split the state into it's separate reducers
  const {
    authReducer: { username },
  } = state;

  // Chose the variables that this component needs from the state.
  return {
    username,
  };
};

// Actions
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login,
  }, dispatch);
}

// Return a new component with the data and actions injected into it as
// properties of the object (props)
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
