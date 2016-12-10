import React from 'react';

import Header from '../containers/Header';
import SidebarMenu from '../containers/Sidebar';

import '../styles/app.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <SidebarMenu />
        <Header />
        {this.props.children}
      </div>
    );
  }
}
