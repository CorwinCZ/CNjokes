import React, { Component } from 'react';
import '../../App.css';

class JokeText extends Component {
  render() {
    const { joke } = this.props;
    return <p className="text">{joke}</p>;
  }
}

export default JokeText;