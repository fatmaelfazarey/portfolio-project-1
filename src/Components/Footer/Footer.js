import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
    const social = [
        {
            icon: <FontAwesomeIcon icon={faFacebook} />,
        },
        {
            icon: <FontAwesomeIcon icon={faTwitter} />,
        },
        {
            icon: <FontAwesomeIcon icon={faInstagram} />,
        },
        {
            icon: <FontAwesomeIcon icon={faYoutube} />,
        },
    ]
    const footer = {
        padding: "80px 10px ",
        backgroundColor: "var(--primaryBackground)",
        textAlign: "center",
        overflow: "hidden",
    }
    const parentIcons = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <>
            <footer style={footer} >
                <div style={parentIcons}>
                    {
                        social.map((ele, i) => (
                            <div key={i}>
                                <i style={{ margin: "5px", color: "var(--primaryColor)" }} id={ele.icon} data-aos='zoom-in'>{ele.icon}</i>
                            </div>
                        ))
                    }
                </div>
                <p data-aos='zoom-in'>code by fatmaelfazery</p>
            </footer>
        </>
    )
}