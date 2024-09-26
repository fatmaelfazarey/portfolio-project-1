
import logo from '../Image/logo.png';
import HeaderStyle from './Header.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    const [responsive, setResponsive] = useState(false);
    const navLink = [
        {
            url: '/',
            text: 'Home',
        },
        {
            url: '/about',
            text: 'About',
        },
        {
            url: '/services',
            text: 'Services',
        },
        {
            url: '/portfolio',
            text: 'Portfolio',
        },
        {
            url: '/testimonials',
            text: 'Testimonials',
        },
        {
            url: '/blog',
            text: 'Blog',
        },
        {
            url: '/contact',
            text: 'Contact',
        },
    ]
    function displayNavBar() {
        setResponsive(!responsive);
    }

    return (<>
        <header className={HeaderStyle.header}>
            <div className='container'>
                <div className={HeaderStyle.logo}>
                    <img src={logo} alt="Logo" data-aos="zoom-in-right" />
                    <button onClick={() => displayNavBar()} className={HeaderStyle.menue} data-aos="zoom-in-left" >
                        <FontAwesomeIcon icon={faBars} id="newIcon" />
                    </button>
                </div>
                <nav className={responsive ? HeaderStyle.heddin : HeaderStyle.nav}  >
                    {
                        navLink.map((link, index) => (
                            <Link to={link.url} key={index} onClick={() => setResponsive(false)}>{link.text}</Link>
                        ))
                    }
                </nav>
            </div >
        </header >
    </>)
}
{/* <link link to = { link.url } key = { index } > { link.text }</link> */ }
//  <a href={link.url} key={index}>{link.text}</a>
