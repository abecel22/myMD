import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span href="#" className="navbar-brand">
                MyMD
            </span>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <span className="nav-link active">Home</span>
                    <span className="nav-link">Doctors</span>
                    <span className="nav-link">Clinics</span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
