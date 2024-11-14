    

import './App.css'
import './index.css'
import Navbar from './components/navbar.tsx'
import HeroSection from './layouts/herosection.tsx'
import AboutUs from './layouts/about.tsx'
import ProjectSection from './layouts/projectsection.tsx'
import ContactSection from './layouts/contactsection.tsx'
import FooterSection from './layouts/footersection.tsx'
import { Helmet } from 'react-helmet-async';
import JoelImage from './assets/images/Joel_T_George.png'
function App() {

  return (
    <>
      <Helmet>
      
        <title>Joel T George - Software Developer & Research Engineer | Chennai</title>


        <meta name="description" content="Joel T George is a Software Developer, Electronic Engineer, Medical Device Engineer, and Researcher. Explore my portfolio and services for freelance projects and companies."/>


        <meta name="keywords" content="Joel T George, Software Developer, Electronic Engineer, Medical Device Engineer, Research , Chennai, freelance software developer, technical trainer Chennai, medical device engineering, electronics design"/>


        <meta property="og:title" content="Joel T George - Software Developer & Research Engineer | Chennai"/>
        <meta property="og:description" content="Explore the professional portfolio of Joel T George, an experienced Software Developer, Electronic Engineer, and Medical Device Engineer offering technical training and freelance services in Chennai."/>
        <meta property="og:image" content={ JoelImage }/>
        <meta property="og:url" content="https://joel-t-george.github.io/"/>
        <meta property="og:type" content="website"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Joel T George - Software Developer & Medical Device Engineer"/>
        <meta name="twitter:description" content="Discover the expertise of Joel T George, a Chennai-based professional in software development, electronics, medical devices, and Researcher."/>
        <meta name="twitter:image" content="[URL to a professional or portfolio-related image]"/>


        <meta name="author" content="Joel T George"/>


        <link rel="canonical" href="https://joel-t-george.github.io/"/>

      </Helmet>
      <header className="fixed w-[100%] top-0 left-0">
        <Navbar/>
      </header> 
      <HeroSection />
      <AboutUs />

      <ProjectSection />

      <ContactSection />
      <FooterSection />

    </>
  )
}

export default App
