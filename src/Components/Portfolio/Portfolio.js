import PortfolioStyle from './Portfolio.module.css';
import port1 from '../Image/Ports/port1.jpg';
import port2 from '../Image/Ports/port2.jpg';
import port3 from '../Image/Ports/port3.jpg';
import port4 from '../Image/Ports/port4.jpg';
import port5 from '../Image/Ports/port5.jpg';
import port6 from '../Image/Ports/port6.jpg';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye } from '@fortawesome/free-solid-svg-icons';

export default function Portfolio() {
    const [category, setCategory] = useState('all');
    const portfolio = [
        {
            id: 1,
            cover: port1,
            name: "Brand",
            category: "marketing",
            title: "Brex Logo",
        },
        {
            id: 2,
            cover: port2,
            name: "Brand",
            category: "design",
            title: "Brex Logo",
        },
        {
            id: 3,
            cover: port3,
            name: "Brand",
            category: "development",
            title: "Brex Logo",
        },
        {
            id: 4,
            cover: port4,
            name: "Brand",
            category: "marketing",
            title: "Brex Logo",
        },
        {
            id: 5,
            cover: port5,
            name: "Brand",
            category: "design",
            title: "Brex Logo",
        },
        {
            id: 6,
            cover: port6,
            name: "Brand",
            category: "development",
            title: "Brex Logo",
        },
    ]

    let categoryList = portfolio.map((item) => item.category);
    const allCategory = ['all', ...new Set(categoryList)];

    const getCategory = (c) => {
        if (c === 'all') {
            setCategory('all');
        } else {
            const newItem = portfolio.filter((e) => e.category === c);
            setCategory(newItem[0].category);
        }
    }

    useEffect(() => {
        let btns = document.getElementById('btns').children;

        for (let ele of btns) {
            ele.style.backgroundColor = "transparent";
        }

        let activeBtn = document.getElementById(category);
        activeBtn.style.backgroundColor = "var(--primaryColor)";
        // console.log(category);

    }, [category]);


    return (<>
        <section className={PortfolioStyle.Portfolio}>
            <div className='container' style={{ flexDirection: 'column' }}>
                <h3 className='title' style={{ textAlign: "center", width: "100%" }}>Portfolio</h3>
                <div className={PortfolioStyle.btns} id='btns'>
                    {
                        allCategory.map((ele, i) => <button className="primaryBtn" onClick={() => getCategory(ele)} id={ele} key={i} data-aos='zoom-out-down'>{ele}</button>)
                    }
                </div>
                <div className={PortfolioStyle.projects}>
                    {
                        portfolio.map((item, index) => (
                            category === 'all' ?
                                <div key={index} data-aos='fade-up'>
                                    <div>
                                        <img src={item.cover} alt="" />
                                    </div>
                                    <div className={PortfolioStyle.text}>
                                        <h3>{item.name}</h3>
                                        <span>{item.title}</span>
                                        <i><FontAwesomeIcon icon={faEye} /></i>
                                    </div>
                                </div>
                                :
                                category === item.category ?
                                    <div key={index} data-aos='fade-up'>
                                        <img src={item.cover} alt="" />
                                        <div className={PortfolioStyle.text}>
                                            <p>{item.name}</p>
                                            <p>{item.title}</p>
                                            <i><FontAwesomeIcon icon={faEye} /></i>
                                        </div>
                                    </div>
                                    : ""
                        ))
                    }
                </div>



            </div>

        </section>
    </>)
}