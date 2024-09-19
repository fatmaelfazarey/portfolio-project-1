import TestimonialsStyle from './Testimonials.module.css';
import team1 from '../Image/team/team-1.png';
import team2 from '../Image/team/team-2.png';
import team3 from '../Image/team/team-3.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
            image: team1,
            name: "Alamin Musa",
            post: "Front End Developer",
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
            image: team2,
            name: "Alex Ander",
            post: "Back End Developer",
        },
        {
            id: 3,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
            image: team3,
            name: "GorkCoder",
            post: "React Developer",
        },
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <section className={TestimonialsStyle.testimonials}>
                {/* <div className='container' style={{ flexDirection: 'column' }}> */}
                <Slider {...settings}>
                    {
                        testimonials.map((item, i) => (
                            <div className={TestimonialsStyle.box} key={i}>
                                <i data-aos='zoom-out-up'> <FontAwesomeIcon icon={faQuoteRight} /></i>
                                <p data-aos='zoom-out-down'>{item.text}</p>
                                <div className={TestimonialsStyle.img} data-aos='zoom-out-right'>
                                    <img src={item.image} alt="person" />
                                </div>
                                <h3 data-aos='zoom-out-left'>{item.name}</h3>
                                <label data-aos='zoom-out'>{item.post}</label>
                            </div>
                        ))
                    }
                </Slider>
                {/* </div> */}
            </section>
        </>
    )
}