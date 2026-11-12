import React, { Component } from 'react';

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-3">
        <img
          src="/loading.gif"
          alt="Loading"
          style={{ width: '50px', height: '50px' }}
        />
      </div>
    );
  }
}

export default Spinner;
