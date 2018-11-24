import React from 'react';
import PropTypes from 'prop-types';

export default class PupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPup: '',
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleTextChange({ target: { value } }) {
    this.setState({ newPup: value });
  }

  handleButtonPress() {
    this.props.updateBestPup(this.state.newPup);
  }

  render() {
    const { bestPup } = this.props;
    const { newPup } = this.state;

    return (
      <div>
        <p>Change best pup</p>
        <input value={newPup} placeholder={bestPup} onChange={this.handleTextChange} />
        <button type="submit" onClick={this.handleButtonPress}>Update</button>
      </div>
    );
  }
}

PupForm.propTypes = {
  bestPup: PropTypes.string.isRequired,
  updateBestPup: PropTypes.func.isRequired,
};
