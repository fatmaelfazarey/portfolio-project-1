import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route  path='/about' component={About} />
                    <Route  path='/services' component={Services} />
                    <Route  path="/counter" component={Counter} />
                    <Route  path="/portfolio" component={Portfolio} />
                    <Route  path="/testimonials" component={Testimonials} />
                    <Route  path="/blog" component={Blog} />
                    <Route  path="/contact" component={Contact} />
                </Switch>
                <Footer />
            </Router>
        </>
    )
}