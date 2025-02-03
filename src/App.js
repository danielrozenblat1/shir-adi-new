import logo from './logo.svg';
import './App.css';
import ByMe from './components/ByMe/ByMe';
import ForthScreen from './screens/ForthScreen';
import ThirdScreen from './screens/ThirdScreen';
import SecondScreen from './screens/SecondScreen';
import Stats from './components/special/Special';
import NavBarNew from './components/NewNav/NavBarNew';
import { useEffect, useState } from 'react';

function App() {
    
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return <>
  <NavBarNew/>
  <Stats scrolled={scrolled}/>
  <SecondScreen/>
  <ThirdScreen/>
  <ForthScreen/>
  <ByMe/>
  
  </>
}

export default App;
