import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions  from '../actions';

import '../styles/header.css';

class Header extends Component {
  constructor() {
    super();
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    const { toggleSidebar, isOpen } = this.props;
    toggleSidebar(isOpen);
  }

  render() {
    const { authenticated } = this.props;
    return (
      <div className="header">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center header-text">
              { authenticated === true ?
                <span className="burger-menu" onClick={this.openMenu}>&#9776;</span>
                :
                ''
              }
              Lista de compra
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authenticated } = state.auth;
  const { isOpen } = state.sidebar;
  return {
    authenticated,
    isOpen,
  }
}

export default connect(mapStateToProps, Actions)(Header);
