import React from 'react';

export default class PupForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      newPup: '',
    };

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.setState({ newPup: e });
  }

  render() {
    return <p>Form</p>;
  }
}
