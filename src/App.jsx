import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks,Tech, Hero, Navbar, Works, StarsCanvas } from "./components"

const App = () => {

  return (
    <BrowserRouter>
    <div className="realtive z-0 bg-primary">
      <div className="bg-cerdo-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <div className="bg-cerdo-pattern-3 bg-cover bg-no-repeat bg-center z-2">
        <About />
      </div>
      <div className="bg-cerdo-pattern-2 bg-cover bg-no-repeat bg-center z-2">
        <Experience />
      </div>
      
      <Tech/>
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App


