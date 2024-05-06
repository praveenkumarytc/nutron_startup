import React from 'react';
import Topbar from './../components/Topbar';
import Header from './../components/Hearder';
import HeaderBanner from './../components/HeaderBanner';
import Facts from './../components/Facts';
import Aboutus from './../components/Aboutus';
import Services from './../components/Services';
import Projects from './../components/Projects';
import Footer from './../components/Footer';
import Contactus from './../components/Contactus';
import Team from './../components/Team';
import Testimonial from './../components/Testimonial';


export default function ProjectScreen() {
  return (
    <>
        <Topbar/>
        <Header/>
        {/* <!-- Page Projects Start --> */}
        <div class="container-fluid page-header py-5">
            <div class="container text-center py-5">
                <h1 class="display-2 text-white mb-4 animated slideInDown">Projects</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol class="breadcrumb justify-content-center mb-0">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                        <li class="breadcrumb-item" aria-current="page">Projects</li>
                    </ol>
                </nav>
            </div>
        </div>
        {/* <!-- Page Projects End --> */}
        <Facts/>
        <Projects/>
        <Footer/>
    </>
  )
}
