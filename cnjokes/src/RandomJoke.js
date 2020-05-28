import React, { Component } from 'react';
import Card from './components/Card';

const CHUCK_API = 'https://api.chucknorris.io/';
const RANDOM_JOKE_QUERY = 'jokes/random';

class RandomJoke extends Component {
  constructor() {
    super();

    this.state = {
      error: null,
      isLoaded: false,
      joke: null,
      id: null,
    };
  }

  getRandomJoke = () => {
    fetch(`${CHUCK_API}${RANDOM_JOKE_QUERY}`)
      .then((response) => response.json())
      .then(
        (data) => {
          const { id, value } = data;
          this.setState({
            isLoaded: true,
            id: id,
            joke: value,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  };

  componentDidMount() {
    this.getRandomJoke();
  }

  render() {
    const { error, isLoaded, id, joke } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="chuckWrap">
        <div className="chuckHeader" />
        <button onClick={this.getRandomJoke}>Get a random joke</button>
        <Card joke={joke} id={id} />
      </div>
    );
  }
}

export default RandomJoke;
