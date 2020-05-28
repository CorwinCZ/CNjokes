import React, { Component } from 'react';
import '../App.css';

class Card extends Component {
  render() {
    const { id, joke } = this.props;
    return (
      <div className="card" id={id}>
        <p className="text">{joke}</p>
      </div>
    );
  }
}

export default Card;
