import React from 'react';

import '../styles/app.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}
