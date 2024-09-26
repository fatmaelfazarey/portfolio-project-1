import { HashRouter as Router, Route, Switch } from "react-router-dom";
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
                    <Route exact path='/about' component={About} />
                    <Route exact path='/services' component={Services} />
                    <Route exact path="/counter" component={Counter} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/testimonials" component={Testimonials} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
                <Footer />
            </Router>
        </>
    )
}