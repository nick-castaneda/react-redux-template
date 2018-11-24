import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// stylesheets for the Component
// import s from './style.css';

// Create a new object based on the React Component prototype.
function Home(props) {
  const { username } = props;
  return (
    <div>
      <p>{username}</p>

      <Link to="/pups">Pups!</Link>
    </div>
  );
}

Home.propTypes = {
  username: PropTypes.string.isRequired,
};

// Map state to props
const mapStateToProps = (state) => {
  const {
    authReducer: { username },
  } = state;
  return { username };
};

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeContainer;
