import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
        
        {/* <!-- Footer Start --> */}
         <div className="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
            <div className="container pt-5 pb-4">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <a href="index.html">
                            <h3 className="text-white fw-bold d-block">Neutron<span className="text-secondary">Software</span> </h3>
                        </a>
                        <p className="mt-4 text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere delectus qui placeat inventore consectetur repellendus optio debitis.</p>
                        <div className="d-flex hightech-link">
                            <a href="" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-facebook-f text-primary"></i></a>
                            <a href="" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-twitter text-primary"></i></a>
                            <a href="" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-instagram text-primary"></i></a>
                            <a href="" className="btn-light nav-fill btn btn-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="h3 text-secondary">Short Link</a>
                        <div className="mt-4 d-flex flex-column short-link">
                            <Link to="/About" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>About us</Link>
                            <Link to="/COntact" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Contact us</Link>
                            <Link to="/Services" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Our Services</Link>
                            <Link to="/Project" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Our Projects</Link>
                            {/* <Link to="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Latest Blog</Link> */}
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <a href="#" className="h3 text-secondary">Help Link</a>
                        <div className="mt-4 d-flex flex-column help-link">
                            <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Terms Of use</a>
                            <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Privacy Policy</a>
                            <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Helps</a>
                            <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>FQAs</a>
                            <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Contact</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="#" className="h3 text-secondary">Contact Us</a>
                        <div className="text-white mt-4 d-flex flex-column contact-link">
                            <a href="#" className="pb-3 text-light border-bottom border-primary"><i className="fas fa-map-marker-alt text-secondary me-2"></i> 123 Street, Noida, India</a>
                            <a href="#" className="py-3 text-light border-bottom border-primary"><i className="fas fa-phone-alt text-secondary me-2"></i> +91 7470360840</a>
                            <a href="#" className="py-3 text-light border-bottom border-primary"><i className="fas fa-envelope text-secondary me-2"></i>neutronsoftwarepvt@gmail.com</a>
                        </div>
                    </div>
                </div>
                <hr className="text-light mt-5 mb-4"/>
                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <span className="text-light"><Link to="/" className="text-secondary"><i className="fas fa-copyright text-secondary me-2"></i>Neutron Software pvt.</Link> All right reserved.</span>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <span className="text-light">Designed By<Link to="/" className="text-secondary"> Neutron Software</Link> </span>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}


        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-secondary btn-square rounded-circle back-to-top"><i className="fa fa-arrow-up text-white"></i></a>
    </>
  )
}
