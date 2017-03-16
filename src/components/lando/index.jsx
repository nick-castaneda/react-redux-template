import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { newLando } from '../../actions/lando';

// import sty from './style.css';

class Delta extends React.Component {
  render() {
    return (
      <div>
        <h1>I love my pup, Lando</h1>
        {this.props.lando}
      </div>
    );
  }
}

// Map state to props
const mapStateToProps = (state) => {
  const lando = state.get('landoReducer');
  return {
    lando: lando.get('lando')
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    newLando: newLando
  }, dispatch)
}

export const LandoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Delta);
