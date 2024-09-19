import ServicesStyle from './Services.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGear, faCropSimple, faUsersViewfinder, faChartPie, faCode, faChartSimple } from '@fortawesome/free-solid-svg-icons';
// import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"
export default function Services() {

    const services = [
        {
            id: 1,
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Creative Design",
            desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
        },
        {
            id: 2,
            icon: <FontAwesomeIcon icon={faCropSimple} />,
            title: "Clean Code",
            desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
        },
        {
            id: 3,
            icon: <FontAwesomeIcon icon={faUsersViewfinder} />,
            title: "Responsive Design",
            desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
        },
        {
            id: 4,
            icon: <FontAwesomeIcon icon={faChartPie} />,
            title: "Material UI	",
            desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
        },
        {
            id: 5,
            icon: <FontAwesomeIcon icon={faCode} />,
            title: "Material UI Icons",
            desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
        },
        {
            id: 6,
            icon: <FontAwesomeIcon icon={faChartSimple} />,
            title: "Awesome Support",
            desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
        },
    ]
    return (
        <section className={ServicesStyle.services}>
            <div className='container' style={{ flexDirection: 'column' }}>
                <h3 className='title' style={{ textAlign: "center", width: "100%" }}>Services</h3>
                <div className={ServicesStyle.boxContainer}>
                    {
                        services.map((val, i) => (
                            <div className={ServicesStyle.box} key={i} data-aos='flip-left'>
                                <i>{val.icon}</i>
                                <h3>{val.title}</h3>
                                <p>{val.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}