import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Image from './components/Image/Image';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {

  return (

    <div className={styles.App}>
      <Navbar/>
      <Image/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
