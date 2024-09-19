
import blog1 from '../Image/blog/b1.png';
import blog2 from '../Image/blog/b2.png';
import blog3 from '../Image/blog/b3.png';

import BlogStyle from './Blog.module.css';

export default function Blog() {
    const blog = [
        {
            id: 1,
            title: "Master These Awesome",
            date: "Jun 27, 2022",
            author: "Dorian Gray",
            desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
            cover: blog1,
        },
        {
            id: 2,
            title: "Best Design Items to Appeal",
            date: "Jun 27, 2022",
            author: "Dorian Gray",
            desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
            cover: blog2,
        },
        {
            id: 3,
            title: "The 20 Best Lightroom Presets",
            date: "Jun 27, 2022",
            author: "Dorian Gray",
            desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
            cover: blog3,
        },
    ]
    return (
        <>
            <section className={BlogStyle.blog}>
                <div className="container" style={{ flexDirection: 'column' }}>
                    <h3 className='title' style={{ textAlign: "center", width: "100%" }}>Blog</h3>
                    <div className={BlogStyle.boxContainer}>
                        {
                            blog.map((ele, i) => (
                                <div key={i} className={BlogStyle.box} data-aos='flip-left'>
                                    <div className={BlogStyle.img} data-aos='fade-up'>
                                        <img src={ele.cover} alt="cover" data-aos='fade-down' />
                                    </div>
                                    <div className={BlogStyle.text}>
                                        <h3 data-aos='fade-right'>{ele.title}</h3>
                                        <label data-aos='fade-left'>By {ele.author} {ele.date}</label>
                                        <p data-aos='fade-up-right'>{ele.desc}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

        </>
    )
}