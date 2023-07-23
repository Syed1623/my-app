// import React, { useState } from 'react';
import PropTypes from 'prop-types'


export default function Navbar(props) {
     
  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.element1}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.element2}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.element3}</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link disabled">{props.element4}</a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.Mode==='light'?'dark':'light'}`}>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
                  <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
            </div>
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    element1: PropTypes.string,
    element2: PropTypes.string,
    element3: PropTypes.string,
    element4: PropTypes.string,
}

Navbar.defaultProps = {
    title: "Title",
    element1: "Element 1",
    element2: "Element 2",
    element3: "Element 3",
    element4: "Element 4",
}
