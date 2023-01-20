import './assets/style/global.scss'
import Router from "./router";
import './assets/style/font.scss'
import usePreloader from "./hook";
import Loader from "./utils";
import './assets/icons/style.css'
import Header from "./pages/header";
import Footer from "./pages/footer";
import 'aos/dist/aos.css';
import Aos from 'aos'
import {useEffect} from "react";
function App() {
    useEffect(()=>{
       Aos.init({duration: 1000})
    },[])
  const {loading} = usePreloader();
  if(loading){
    return <Loader/>
  }
  return (
    <div >
      <Header/>
  <Router/>
      <Footer/>
    </div>
  );
}

export default App;
