import Aboutme from "./components/Aboutme"
import Contact from "./components/Contact"
import Expertise from "./components/Expertise"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Project from "./components/Project"

const App = () => {
  return (
    <div className="bg-gradient-to-r from-neutral-100 to-neutral-300">
        <div className="w-screen container mx-auto">
          <Header />
          <Aboutme />
          <Project />
          <Expertise />
          <Contact />
          <Footer />
        </div>
    </div>
  )
}

export default App
