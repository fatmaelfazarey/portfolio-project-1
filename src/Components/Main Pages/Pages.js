// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "../Header/Header";
import Home from "./Home";
import About from "../About/About";
import Services from "../Services/Services";
import Counter from "../Counter/Counter";
import Portfolio from "../Portfolio/Portfolio";
import Testimonials from "../Testimonials/Testimonials";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop";
import Layout from "../Layout/Layout";

export default function Pages() {
    const router = createBrowserRouter([
        {
            basename: '/portfolio-project-1',
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
              
                {
                    path: "/portfolio-project-1",
                    element: <Home />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/services",
                    element: <Services />,
                },
                {
                    path: "/counter",
                    element: <Counter />,
                },
                {
                    path: "/portfolio",
                    element: <Portfolio />,
                },
                {
                    path: "/testimonials",
                    element: <Testimonials />,
                },
                {
                    path: "/blog",
                    element: <Blog />,
                },
                {
                    path: "/contact",
                    element: <Contact />,
                },
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}