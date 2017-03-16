// Import React, redux, and react-redux for this 'Smart' Component
// 'dumb' components only use react
import React from "react";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

// import all the actions this component will use.
import { newLando } from '../../actions/lando';

// stylesheets for the Component
import sty from "./style.css";

// Create a new object based on the React Component prototype.
class Home extends React.Component {
  // 'Render' is the most important React method. It spits out HTML
  render() {
    // You can only return one element, but you can put as many as you
    // want inside. This one has three children:
    // First, is another React Component, 'Navbar'. It's a general
    // component used by all the other pages.
    // Second, is pure HTML.
    // Last is a ternary (no 'ifs' allowed). If there's a uuid in the
    // state, print it's value on the page. Otherwise, display 'loading'
    return (
      <div>
        <h1>VentureUs</h1>
        {!!this.props.uuid
          ? <p>The logged in user is: {this.props.uuid}</p>
          : <p>Loading ...</p>
        }
        <Link to="/lando">Lando</Link>
      </div>
    );
  }
}

// Data
const mapStateToProps = (state) => {
  // Split the state into it's separate reducers
  const user = state.get('userReducer');
  // const delta = state.get('deltaReducer');
  // Chose the variables that this component needs from the state.
  return {
    uuid: user.get('uuid')
  };
}

// Actions
const mapDispatchToProps = (dispatch) => {
  // Chose the action creators that this component needs.
  return bindActionCreators({
    newLando: newLando
  }, dispatch)
}

// Return a new component with the data and actions injected into it as
// properties of the object (props)
export const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
