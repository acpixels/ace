import React from 'react';
import {Link} from 'react-router-dom';
import Card from './../shared/Card';
import Carousel from './../shared/Carousel'
import ssoHome from './../../img/single-sign-on-home.png'
import Modal from './../shared/Modal'

const Dashboard = props => {

  return (<div id="dashboard" className="container-fluid mt-5">
    <div className="row">
      <div className="col">
        <div className="jumpbotron jumbotron-fluid text-center">
          <h1 className="display-4 primary">ANNE ERVIN</h1>
          <h2 className="display-4">User Experience & Interaction Designer</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col"></div>
    </div>
    <div className="row">
      <Card cardHeader="Tower">
        <p>Authentication and Single Sign On platform utilized by the State of Michigan to manage access across the multiple user bases.</p>
        <a href="#modal" role="button" data-toggle="modal" data-target="#modal">View</a>
      </Card>
      <Card cardHeader="Tower">
        <p>Authentication and Single Sign On platform utilized by the State of Michigan to manage access across the multiple user bases.</p>
      </Card>
      <Card cardHeader="Centrum">
        <p>Authentication and Single Sign On platform</p>
        <p>Stack: AngularJS, Grunt, NodeJS, MongoDB, Redis</p>
      </Card>
      <Card cardHeader="Lobot">
        Chicken
      </Card>
      <Card cardHeader="Test">
        Chicken
      </Card>
    </div>

    <Modal closeText="Cancel" confirmText="Confirm" modalTitle="" modalWidth="modal-width">
      <div className="row justify-content-center">
        <Carousel/>
      </div>
    </Modal>
  </div>);
}

export default Dashboard;
