import React from 'react';
// import { Typewriter } from 'react-simple-typewriter';
import HomeStyle from './Home.module.css';
import Typewriter from 'typewriter-effect';


export default function Home() {
    const home = [
        {
            text: "HELLO I'M",
            name: "Fatma Elfazery",
            post: "WEB DESIGNER",
            design: "UI / UX DESIGNER",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
    ]
 
    return (
        <>
            <section className={HomeStyle.hero}>
                {
                    home.map((val, i) => (
                        <div className={HomeStyle.heroContainer} key={i}>
                            {/* <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString(`<h3 class="text">${val.text}</h3>`)
                                        .typeString(`<h1>${val.name}<br/> ${val.post} , ${val.design}</h1>`)
                                        .start();
                                }}
                            /> */}
                            <h3 className={HomeStyle.text} data-aos='fade-right'>{val.text}</h3>
                            <h1>
                                <Typewriter
                                    options={{
                                        strings: [val.name, val.post, val.design],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h1>
                            <p data-aos='fade-left'>{val.desc}</p>
                            <button className="primaryBtn" data-aos='fade-up-right'>Bownload CV</button>
                        </div>
                    ))
                }
            </section>
        </>
    )
}