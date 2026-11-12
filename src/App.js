import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import News from './components/News';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'general',
    };
  }

  setCategory = (category) => {
    this.setState({ category });
  };

  render() {
    return (
      <div>
        <Navbar setCategory={this.setCategory} />
        <News pageSize={5} category={this.state.category} />
      </div>
    );
  }
}