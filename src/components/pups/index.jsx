import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import PupForm from './PupForm';
import { updateBestPup } from '../../actions/pup';

// import s from './style.css';

function Pup(props) {
  const { bestPup } = props;
  return (
    <div>
      <h1>{`I love my pup, ${bestPup}`}</h1>
      <PupForm bestPup={bestPup} updateBestPup={props.updateBestPup} />
      <Link to="/">Home</Link>
    </div>
  );
}

Pup.propTypes = {
  bestPup: PropTypes.string.isRequired,
  updateBestPup: PropTypes.func.isRequired,
};

// Map state to props
const mapStateToProps = (state) => {
  const {
    pupReducer: { bestPup },
  } = state;
  return { bestPup };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  updateBestPup,
}, dispatch);

const PupContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pup);

export default PupContainer;
