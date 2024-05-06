import React from 'react'
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


export default function HomeScreen() {
  return (
    <>
        <Topbar/>
        <Header/>
        <HeaderBanner/>
        <Facts/>
        <Aboutus/>
        <Services/>
        <Projects/>
        <Team/>
        <Testimonial/>
        <Contactus/>
        <Footer/>
    </>
  )
}
