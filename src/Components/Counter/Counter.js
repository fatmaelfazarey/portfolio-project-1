// import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"
import { CloudOutlined, HeartOutlined, GlobalOutlined, UserOutlined } from '@ant-design/icons';
import CounterStyle from './Counter.module.css';
import CountUp from "react-countup";

function Counter() {
    const project = [
        {
            id: 1,
            icon: <CloudOutlined />,
            num: "89",
            title: "HAPPY CLIENTS",
        },
        {
            id: 2,
            icon: <HeartOutlined />,
            num: "231",
            title: "PROJECTS COMPLEATED",
        },
        {
            id: 3,
            icon: <GlobalOutlined />,
            num: "108",
            title: "FILES DOWNLOADED",
        },
        {
            id: 4,
            icon: <UserOutlined />,
            num: "1446",
            title: "LIENS OF CODE",
        },
    ]
    return (<>
        <section className={CounterStyle.Counter}>
            <div className='container' >
                <div className={CounterStyle.boxContainer}>
                    {
                        project.map((val, index) => (
                            <div key={index} className={CounterStyle.box}>
                                <i >{val.icon}</i>
                                <h3 className='title'>
                                    <CountUp start={0} end={val.num} duration={2} enableScrollSpy={true} >
                                        {({ countUpRef }) => <span ref={countUpRef} />}
                                    </CountUp>
                                </h3>
                                <p>{val.title}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    </>)
}
export default Counter;