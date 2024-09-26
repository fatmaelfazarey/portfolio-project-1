// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "../Header/Header";
import Home from './Home';
import About from "../About/About";
import Services from "../Services/Services";
import Counter from "../Counter/Counter";
import Portfolio from "../Portfolio/Portfolio";
import Testimonials from "../Testimonials/Testimonials";
import Blog from "../Blog/Blog";
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import ScrollToTop from "../ScrollToTop";

export default function Pages() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route exact path='/' element={Home} />
                    <Route exact path='/about' element={About} />
                    <Route exact path='/services' element={Services} />
                    <Route exact path='/counter' element={Counter} />
                    <Route exact path="/portfolio" element={Portfolio} />
                    <Route exact path="/testimonials" element={Testimonials} />
                    <Route exact path="/blog" element={Blog} />
                    <Route exact path="/contact" element={Contact} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}