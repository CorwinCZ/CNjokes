import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

import './App.css';
import Layout from './components/Layout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeName = newName => this.setState({ name: newName })

  render() {
    return (
      <div className="App">
        <Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
