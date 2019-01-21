// Import React, redux, and react-redux for this 'Smart' Component
// 'dumb' components only use react
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

// import all the components and actions this container will use.
import Routes from './Routes';
import { login } from '../actions/auth';
import './style.css';

class App extends React.Component {
  componentDidMount() {
    this.props.login();
  }

  render() {
    const { username } = this.props;
    if (username) {
      return (
        <div className="container">
          <Routes className="content" />
        </div>
      );
    }

    return (
      <div className="container">
        <div className="side" />
        <div className="content">
          <p className="blue">You are logged out</p>
        </div>
        <div className="side" />
      </div>
    );
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
