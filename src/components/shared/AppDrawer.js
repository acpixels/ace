import React from 'react';
import {Link} from 'react-router-dom';

class TowerAppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      towerOpen: false
    };
  }

  handleToggleDrawer(e) {
    const towerOpen = !this.state.towerOpen;
    this.setState({towerOpen})
  }

  render() {
    const {towerOpen} = this.state;
    const {drawerItems, children} = this.props;

    const drawerClass = () => {
      if(towerOpen){
        return "visible border-right";
      }
      return "hidden border-right";
    }

    const drawerArrow = () => {
      if(towerOpen){
        return "chevron_left";
      }
      return "chevron_right";
    }

    const contentWidth = () => {
      if(towerOpen){
        return "sso-visible";
      }
      return "";
    }

    const linkView = () => {
      if(towerOpen){
        return "d-inline align-top";
      }
      return "d-none";
    }

    return (
      <div>
        <ul className={`nav flex-column ${drawerClass()}`}>
          <li className="nav-item drawer-nav">
            <Link to="dashboard">
              <i className="material-icons text-dark">home</i>
              <span className={linkView()}>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="services">
              <i className="material-icons text-dark">dns</i>
              <span className={linkView()}>Services</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="users">
              <i className="material-icons text-dark">groups</i>
              <span className={linkView()}>Users</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="jurisdiction">
              <i className="material-icons text-dark">edit_location</i>
              <span className={linkView()}>Jurisdictions</span>
            </Link>
          </li>
          <li className="drawer-nav drawer-toggle" onClick={this.handleToggleDrawer.bind(this)}>
            <i className="material-icons float-right">{drawerArrow()}</i>
          </li>
        </ul>
        <div className={`app-content ${contentWidth()}`}>
          {children}
        </div>
      </div>
  )}
};

export default TowerAppDrawer;
