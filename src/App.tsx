    

import './App.css'
import './index.css'
import Navbar from './components/navbar.tsx'
import HeroSection from './layouts/herosection.tsx'
import AboutUs from './layouts/about.tsx'
import ProjectSection from './layouts/projectsection.tsx'
function App() {

  return (
    <>
      <header className="fixed w-[100%] top-0 left-0">
        <Navbar/>
      </header> 
      <HeroSection />
      <AboutUs />

      <ProjectSection />
    </>
  )
}

export default App
