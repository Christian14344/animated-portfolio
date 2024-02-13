import "./app.scss";
import Navbar from "./component/navbar/Navbar";
import Hero from "./component/hero/Hero";
import Parallax from "./component/parallax/Parallax";
import Test from "./Test";
import Services from "./component/services/Sarvices";
import Portfolio from "./component/portfolio/Portfolio";
import Contact from "./component/contact/Contact";
import Cursor from "./component/cursor/Cursor";

const App = () => {
  return <div>
    <Cursor/>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact">
    <Contact/>
    </section>
    {/* <Test/>
    <Test/> */}
    
  </div>;
};

export default App;
