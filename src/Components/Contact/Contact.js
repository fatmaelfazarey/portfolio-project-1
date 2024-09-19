import ContactStyle from './Contact.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPhone, faMessage } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    const contact = [
        {
            icon: <FontAwesomeIcon icon={faLocationPin} />,
            text1: "2651 Main Street, Suit 124",
            text2: "Seattle, WA, 98101",
        },
        {
            icon: <FontAwesomeIcon icon={faPhone} />,
            text1: "0123456789",
            text2: "0345627891",
        },
        {
            icon: <FontAwesomeIcon icon={faMessage} />,
            text1: "hello@thetheme.io",
            text2: "inf0@brex-theme.io",
        },
    ]
    return (
        <>
            <section className={ContactStyle.contact}>
                <h3 className='title' style={{ textAlign: "center", width: "100%" }}>Keep In Touch</h3>
                <div className='container' style={{ gap: "40px" }}>
                    <form className={ContactStyle.getInfo}>
                        <div className={ContactStyle.flexNameEmail}>
                            <input type='text' placeholder='Name' required data-aos='flip-left'/>
                            <input type='email' placeholder='Email' required data-aos='flip-right'/>
                        </div>
                        <input type='text' placeholder='Subject'  data-aos='flip-up' />
                        <textarea name='' id="" rows={10} cols="30" data-aos='flip-down' ></textarea>
                        <input type='submit' value='Submit' data-aos='zoom-in-up' />
                    </form>
                    <div className={ContactStyle.postInfo}>
                        {
                            contact.map((ele, i) => (

                                <div key={i} className={ContactStyle.box} data-aos='zoom-in'>
                                    <i>{ele.icon}</i>
                                    <span>{ele.text1}</span>
                                    <span>{ele.text2}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}