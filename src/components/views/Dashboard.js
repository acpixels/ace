import React from 'react';
import {Link} from 'react-router-dom';
import Card from './../shared/Card';
import Carousel from './../shared/Carousel'
import ssoHome from './../../img/single-sign-on-home.png'
import Modal from './../shared/Modal'
import cavsLogo from './../../img/cavs-logo.png'

const Dashboard = props => {

  return (<div id="portfolio" className="mt-4">
    <header>
      <div id="intro">
        <div className="jumpbotron jumbotron-fluid text-center py-4">
          <h1 className="display-2">Hello, my name is&nbsp;<span className="primary">ANNE ERVIN</span>.
          </h1>
          <h2 className="display-3">I'm a&nbsp;<span className="secondary">User Experience & Interaction Designer</span>.
          </h2>
        </div>
      </div>
    </header>
    <hr className="mx-3"></hr>
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <br/>
          <h3 className="display-3 text-center">
            With over 10 years experience, my primary&nbsp;<span className="secondary font-italic">skills</span>&nbsp;are...</h3>
          <br/>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-md-3 col-sm-6">
          <div className="progress blue">
            <span className="progress-left">
              <span className="progress-bar"></span>
            </span>
            <span className="progress-right">
              <span className="progress-bar"></span>
            </span>
            <div className="progress-value">90%</div>
          </div>
          <p className="text-center pt-3">User Experience</p>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="progress yellow">
            <span className="progress-left">
              <span className="progress-bar"></span>
            </span>
            <span className="progress-right">
              <span className="progress-bar"></span>
            </span>
            <div className="progress-value">75%</div>
          </div>
          <p className="text-center pt-3">Rapid Prototyping</p>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="progress green">
            <span className="progress-left">
              <span className="progress-bar"></span>
            </span>
            <span className="progress-right">
              <span className="progress-bar"></span>
            </span>
            <div className="progress-value">75%</div>
          </div>
          <p className="text-center pt-3">Information Architecture</p>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="progress red">
            <span className="progress-left">
              <span className="progress-bar"></span>
            </span>
            <span className="progress-right">
              <span className="progress-bar"></span>
            </span>
            <div className="progress-value">75%</div>
          </div>
          <p className="text-center pt-3">Code</p>
        </div>
      </div>
    </div>
    <hr className="mx-3"></hr>
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <br/>
          <h3 className="display-3 text-center">
            I've worked on various types of&nbsp;<span className="secondary font-italic">projects</span>...</h3>
          <br/>
        </div>
      </div>
      <section id="examples container-fluid">
        <div className="container">
          <div className="row">
            <div className="card card-width ml-3">
              <div className="card-body">
                <h6 className="font-weight-bold primary mb-3">CAVS | Cost Analysis Valuation System</h6>
                <p className="mb-0">Application utilized by local muncipalities to process non-filing taxpayers.
                </p>
              </div>
              <div className="card-footer bg-secondary">
                <a href="#cavs" id="cavs" className="text-white text-uppercase" role="button" data-toggle="modal" data-target="#cavs">View</a>
              </div>
            </div>
            <div className="card card-width">
              <div className="card-body">
                <h6 className="font-weight-bold primary mb-3">SSO | Single Sign On Platform</h6>
                <p className="mb-0">Authentication and Single Sign On Platform</p>
              </div>
              <div className="card-footer bg-secondary">
                <a href="#sso" id="sso" className="text-white text-uppercase" role="button" data-toggle="modal" data-target="#sso">View</a>
              </div>
            </div>
            <div className="card card-width mr-0">
              <div className="card-body">
                <h6 className="font-weight-bold primary mb-3">Taxscribe | Online Tax Filing System</h6>
                <p className="mb-0">Online service to file business personal property taxes.</p>
              </div>
              <div className="card-footer bg-secondary">
                <a href="#taxscribe" id="taxscribe" className="text-white text-uppercase" role="button" data-toggle="modal" data-target="#taxscribe">View</a>
              </div>
            </div>
            <div className="card card-width ml-3">
              <div className="card-body">
                <h6 className="font-weight-bold primary mb-3">Jenna Wagner Racing</h6>
                <p className="mb-0">Race Car Driver Autograph Card
                </p>
              </div>
              <div className="card-footer bg-secondary">
                <a href="#cavs" id="cavs" className="text-white text-uppercase" role="button" data-toggle="modal" data-target="#cavs">View</a>
              </div>
            </div>
            <div className="card card-width">
              <div className="card-body">
                <h6 className="font-weight-bold primary mb-3">Fox Sports | Fantasy Bid</h6>
                <p className="mb-0">Digital Streaming Experience</p>
              </div>
              <div className="card-footer bg-secondary">
                <a href="#sso" id="sso" className="text-white text-uppercase" role="button" data-toggle="modal" data-target="#sso">View</a>
              </div>
            </div>
            <div className="card card-width mr-0">
              <div className="card-body">
                <h6 className="font-weight-bold primary mb-3t">SPEED.com | Marketing Campaigns</h6>
                <p className="mb-0">Marketing Campaigns</p>
              </div>
              <div className="card-footer bg-secondary">
                <a href="#taxscribe" id="taxscribe" className="text-white text-uppercase" role="button" data-toggle="modal" data-target="#taxscribe">View</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* <hr className="mx-3"></hr>
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <br/>
          <h3 className="display-3 text-center">
            I'm really just a&nbsp;
            <span className="secondary font-italic">problem solver</span>...
          </h3>
          <br/>
        </div>
      </div>
      <section id="about container-fluid">
        <div className="container">
          <section id="about">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <p className="display-4">Raised off a rural two-lane Historyland Highway, squeezed between the Rappahanock and Potomac rivers, ending at the Chesapeake Bay, in the Northern Neck of Virginia.</p>
                <p className="display-4">For work, I drive the User Experience and Interactions from concept to release with a goal of shipping easy to use experiences.</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div> */
    }
    <hr className="mx-3"></hr>
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <br/>
          <h3 className="display-3 text-center">
            I'm really just a&nbsp;
            <span className="secondary font-italic">problem solver</span>...</h3>
          <br/>
        </div>
      </div>
      <br/>
      <br/>
      <section id="clients container-fluid">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-lg-3 col-sm-3 text-center">
              <i className="fas fa-futbol fa-7x"></i>
              <h3 className="display-5 text-center pt-3">who likes soccer,</h3>
            </div>
            <div className="col-sm-12 col-lg-3 col-sm-3 text-center">
              <i className="fas fa-anchor fa-7x"></i>
              <h3 className="display-5 text-center pt-3">sandy beaches</h3>
            </div>
            <div className="col-sm-12 col-lg-3 col-sm-3 text-center">
              <i className="fas fa-headphones fa-7x"></i>
              <h3 className="display-5 text-center pt-3">and chill tunes.</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>);
}

export default Dashboard;
