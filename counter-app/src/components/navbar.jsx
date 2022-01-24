import React, { Component } from 'react';

function Navbar(props)  {
    return (
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
            Navbar
            <span className='badge bg-pill bg-secondary'>
                {props.totalCounters}
            </span>
        </a>
        </nav>
    );
}

export default Navbar;