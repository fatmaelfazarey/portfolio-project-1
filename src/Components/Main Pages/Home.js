import Hero from "../Home/Hero";
import About from "../About/About"
import Services from "../Services/Services";
import Counter from "../Counter/Counter";
import Portfolio from "../Portfolio/Portfolio";
import Testimonials from "../Testimonials/Testimonials";
import Blog from "../Blog/Blog";
import Contact from '../Contact/Contact';

export default function ScrollPages() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Counter />
            <Portfolio />
            <Testimonials />
            <Blog />
            <Contact />
        </>
    )
}