
// import { useMotion } from 'react-use';
import './App.css';
import About from './components/aboutMe/About';
import Certification from './components/certification/Certification';
import Contact from './components/contactMe/Contact';
import Education from './components/education/Education';
import Footer from './components/footer/Footer';
import Hobbies from './components/hobbies/Hobbies';
import Nav from './components/nav/Nav';
import Profile from './components/profile/Profile';
import Project from './components/projects/Project';
import Scroll from './components/scroll/Scroll';
import Skills from './components/skills/Skills';


function App() {

  return (
    <div className="App" >
          <Nav />
          <Profile />
          <About />
          <Skills />
          <Education />
          <Project />
          <Certification />
          <Hobbies />
          <Contact />
          <Footer />
          <Scroll />
    </div>

  );
}

export default App;
