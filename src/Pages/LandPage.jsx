import React from 'react'
import Header from '../components/Header/Header'
// import FirstSection from '../components/FirstSection/FirstSection'
import About from '../components/About/About'
import ContactUs from '../components/ContactUs/ContactUs'
import AboutUs2 from '../components/AboutUs2/AboutUs2'
import Footer from '../components/Footer/Footer'
import DemmyFirstSection from '../components/DemmyFirstSection/DemmyFirstSection'
import Section2 from '../components/Section2/Section2'
import Perks from '../components/Perks/Perks'
import Founders from '../components/Founders/Founders'

function LandPage() {
    return (
        <div>
            <Header />
            <DemmyFirstSection/>
            <Section2/>
            <Perks/>
            {/* <FirstSection /> */}
            <About />   
            <AboutUs2 />
            <Founders/>
            <ContactUs />
            <Footer />
        </div>
    )
}

export default LandPage
