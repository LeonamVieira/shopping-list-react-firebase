import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as Actions from '../actions';


import '../styles/sidebar.css';
import userLogo from '../styles/img/user.png';

class SidebarMenu extends Component {
  constructor() {
    super();
    this.handleSignout = this.handleSignout.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleSignout() {
    this.closeMenu();
    this.props.signOutUser();
  }

  closeMenu() {
    const { toggleSidebar, isOpen } = this.props;
    toggleSidebar(isOpen);
  }

  renderUserInfo() {
    const { user } = this.props;
    return (
      <div className="user-info">
        <div className="user-image">
          <img src={user !== null && user.photoURL !== null ? user.photoURL : userLogo} alt="User"/>
        </div>
          <div className="user-name">
            <span>{user !== null && user.displayName !== null ? user.displayName : ''}</span>
          </div>
          <div className="user-email">
            <span>{user != null ? user.email : ''}</span>
          </div>
      </div>
    );
  }

  render() {
    const { isOpen } = this.props;
    return (
      <div className={`sidebar ${isOpen && 'open'}`} id="mySidenav">
        <div className="grid grid-fluid">
          <div className="row">
            <div className="col-12 text-right">
              <a onClick={this.closeMenu}><i className="fa fa-fw fa-times fa-2x" aria-hidden="true"></i></a>
            </div>
          </div>
          <div className="row">
            <div className="col-12 columns">
              {this.renderUserInfo()}
            </div>
          </div>
          <div className="row">
            <div className="col-12 columns">
              <ul className="menu-list">
                <li>
                  <Link to='/'><i className="fa fa-fw fa-list-ul fa-lg" aria-hidden="true"></i> Tareas</Link>
                </li>
                <li>
                  <Link to='/records'><i className="fa fa-fw fa-history fa-lg" aria-hidden="true"></i> Historial</Link>
                </li>
                <li>
                  <Link to='/profile'><i className="fa fa-fw fa-pencil-square-o fa-lg" aria-hidden="true"></i> Editar perfil</Link>
                </li>
                <li>
                  <a onClick={this.handleSignout}><i className="fa fa-fw fa-sign-out fa-lg" aria-hidden="true"></i> Cerrar sesión</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authenticated, user } = state.auth;
  const { isOpen } = state.sidebar;
  return {
    authenticated,
    user,
    isOpen
  }
}

export default connect(mapStateToProps, Actions)(SidebarMenu);
