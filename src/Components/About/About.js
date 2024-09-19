import man from '../Image/man.png';
import AboutStyle from './About.module.css';
export default function About() {
    const about = [
        {
            desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
            desc1: "magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
            cover: man,
        },
    ]

    // console.log(about[0].cover);
    return (<>
        <section className={AboutStyle.about}>
            <div className="container">
                {
                    about.map((val, i) => (
                        <div key={i}>
                            <div className={AboutStyle.left} data-aos='fade-down-right'>
                                <img src={val.cover} alt="man" className={AboutStyle.manImg} />
                            </div>
                            <div className='right' data-aos='fade-down-left'>
                                <h2 className='title'>About Me</h2>
                                <p>{val.desc}</p>
                                <p>{val.desc1}</p>
                                <div className={AboutStyle.btns}>
                                    <button className='primaryBtn removeBC' >Bownload CV</button>
                                    <button className="primaryBtn">Bownload CV</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    </>)
}