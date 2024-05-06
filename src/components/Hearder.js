import React from 'react';
import { Link } from 'react-router-dom';


export default function Hearder() {
  return (
    <>
         {/* <!-- Navbar Start --> */}
        <div className="container-fluid bg-primary">
            <div className="container">
                <nav className="navbar navbar-dark navbar-expand-lg py-0">
                    <a href="index.html" className="navbar-brand">
                        <h3 className="text-white fw-bold d-block">Neutron<span className="text-secondary">Software</span> </h3>
                    </a>
                    <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
                        <div className="navbar-nav ms-auto mx-xl-auto p-0">
                            <Link to="/" className="nav-item nav-link active text-secondary">Home</Link>
                            <Link to="/About" className="nav-item nav-link">About</Link>
                            <Link to="/Services" className="nav-item nav-link">Services</Link>
                            <Link to="/Project" className="nav-item nav-link">Projects</Link>
                            {/* <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded">
                                    <a href="blog.html" className="dropdown-item">Our Blog</a>
                                    <a href="team.html" className="dropdown-item">Our Team</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="404.html" className="dropdown-item">404 Page</a>
                                </div>
                            </div> */}
                            <Link to="/Contact" className="nav-item nav-link">Contact</Link>
                        </div>
                    </div>
                    <div className="d-none d-xl-flex flex-shirink-0">
                        <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                            <a href="" className="position-relative animated tada infinite">
                                <i className="fa fa-phone-alt text-white fa-2x"></i>
                                <div className="position-absolute" style={{top:'-7px',left:'20px'}}>
                                    <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                </div>
                            </a>
                        </div>
                        <div className="d-flex flex-column pe-4 border-end">
                            <span className="text-white-50">Have any questions?</span>
                            <span className="text-secondary">Call: +91 7470360840</span>
                        </div>
                        {/* <div className="d-flex align-items-center justify-content-center ms-4 ">
                            <a href="#"><i className="bi bi-search text-white fa-2x"></i> </a>
                        </div> */}
                    </div>
                </nav>
            </div>
        </div>
        {/* <!-- Navbar End --> */}
    </>
  )
}
