import './style.scss';
import {useEffect, useRef, useState} from "react";
import ArmImg from  '../../assets/images/armjan.png';
import TextTransition, { presets } from "react-text-transition";
import  cv from '../../assets/documents/Armen_cv.pdf'
import MyWorks from "./components/myWorks";
import {worksList} from "./worksList";
import {Link} from "react-router-dom";
const languages = [
    "Armen Muradyan",
    "Արմեն Մուրադյան",



];
function Work(){
    const myRef = useRef(null);
    useEffect(()=>{
        window.onscroll = function (){
            let numY =1-(window.scrollY/200)
            if(window.innerWidth <= 850){
                numY = 1
            }
            if(numY <=0){
                numY = 0
            }
            myRef.current.style.opacity = `${numY}`

        }
    },[])
    const [list,setList] = useState(worksList);
    const [index, setIndex] = useState(0);
    useEffect(() => {

        const intervalId = setInterval(() => {
            if (index <= 4) {
                setIndex(index => index + 1)
            }

        }, 3000
        );
        return () => clearTimeout(intervalId);
    }, []);
    const [hello,setHello] = useState('Hi');

    return(
        <section className='P-work-block' data-aos="unset">
            <div className='P-work-container G-container'>

                <div className='P-home-block'>
                    <div className='P-home-left-block'>
                        <h2 className="P-home-my-name" id='one'>
                                    <TextTransition  springConfig={presets.wobbly} delay={3}>
                                      {languages[index % languages.length]}
                                   </TextTransition>
                        </h2>
                        <p className="P-home-subtitle">Front-End <Developer></Developer></p>
                        <p className="P-home-text">Hello, I am Armen! A front-end developer from Armavir, Armenia. Currently working as an independent front-end developer. </p>

                    </div>

                    <div className="P-home-right-block" >
                        <div className="P-home-my-image" style={{backgroundImage:`url('${ArmImg}')`}} ref={myRef}/>
                    </div>
                </div>

    <div className="P-about-my">
        <div className='P-experiences-block' >
            <h2 className='P-work-experiences'  data-aos="zoom-in-down">Work Experiences</h2>
            <div className='Work-experiences-container'>
                <div className="P-work-left-block" data-aos="fade-right"  data-aos-duration="700">
                    <h2 className="P-sharp">Group 404</h2>
                    <h3 className="P-sharp-brains">Frontend Developer</h3>
                    <h3 className="P-sharp-data">May 2022 - Present</h3>

                    <p className="P-sharp-brains-block">
                        <p> - Bug fixing</p>
                        <p> - Cross-browser and adaptive layout</p>
                        <p> - Pixel Perfect layout</p>
                        <p> - Development of complex functionality</p>
                        <p> - Creation of components (including reusable ones)</p>
                        <p> - Refactoring of the existing obsolete code base</p>
                    </p>
                </div>
                <div className="P-work-left-block" data-aos="fade-left"  data-aos-duration="700">
                    <h2 className="P-sharp">IT Training Center</h2>
                    <h3 className="P-sharp-brains">Front-End Trainer</h3>
                    <h3 className="P-sharp-data">April 2022 - Present</h3>

                    <p className="P-sharp-brains-block">I teach my students how to create cross-browser and adaptive pixel perfect layouts and develop complex functionalities by using modern technologies.</p>
                </div>
            </div>
        </div>
        <div className="P-resume" data-aos="zoom-in-up"
             data-aos-anchor-placement="bottom-bottom" data-aos-duration="700">
            <h2 className='P-resume-title'>Resume</h2>
            <div className='P-resume-text-btn'>
                <p className="P-resume-text">If you are interested in my candidacy, you can download  my resume directly
                    from this site. Without registration and SMS.
                </p>
                <div className='P-resume-btn-block'>
                    <a className='P-resume-btn' href={cv} download >Download</a>
                </div>
            </div>
        </div>
    <div className='P-about-Hobby' data-aos="fade-right" data-aos-duration="700">
        <h2 className='P-hobby'>Hobby</h2>
        <p className='P-hobby-text'>
            A little about my hobbies. During my free time I like listening to music, reading fantasy and historical books, watching movies, playing football, doing fitness.
        </p>

    </div>
        <div className='P-purpose-block' data-aos="fade-left" data-aos-duration="700">
            <h2 className='P-purpose'>Purpose</h2>
            <p className='P-purpose-text'>Become a “senior developer”, learn as many programming languages as possible, develop and become an expert in programming.</p>
        </div>


    </div>
            </div>

        </section>
    )
}
export default Work