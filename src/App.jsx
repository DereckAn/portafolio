import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Navbar, Works, StarsCanvas, Hero2 } from "./components"

const App = () => {

  return (
    <BrowserRouter>
    <div className="realtive z-0 bg-primary">
      <div className="bg-transparent">
        <Navbar />
      </div>
      <div className="bg-cerdo-pattern-5 bg-cover bg-no-repeat bg-center pt-[10%]">
        <Hero2 />
      </div>
      <div className="bg-cerdo-pattern-3 bg-cover bg-no-repeat bg-center">
        <About />
      </div>
      <div className="bg-cerdo-pattern-2 bg-cover bg-no-repeat bg-center">
        <Experience />
      </div>
      {/* <div className="bg-cerdo-pattern-4 bg-cover bg-no-repeat bg-center border-8"
      style={{backgroundAttachment: 'fixed', backgroundPosition: '50% 0'}}> 
        <Tech/>
        <Tecnologies/>
      </div> */}
     
      <div className="bg-cerdo-pattern bg-cover bg-no-repeat bg-center">
        <Works />
      </div>
      <div className="relative z-0">
        <Contact />
        <StarsCanvas/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App


