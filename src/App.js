// import './App.css';
import Pages from './Components/Main Pages/Pages';
import { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  // useEffect(() => {
  //   AOS.init({
  //     disable: "phone",
  //     duration: 700,
  //     easing: "ease-out-cubic",
  //   });
  // }, []);
  return (
    <>
      <Pages />
    </>
  );
}

export default App;
