import './style.scss';
import myImg from '../../assets/images/it.JPG'
function About(){
    return(
        <div className='P-about-block'>
            <div className='G-container P-about-container'>
                <div className='P-about-left'>
                    <h2 className="P-about-left-title">Hey</h2>
                    <p className="P-about-left-text" data-aos="fade-down-right" data-aos-duration="700">
                        A front-end developer from Armavir, Armenia.  I code in both Javascript and Typescript languages. Sometimes I use the React.js framework. I create cross-browser and adaptive pixel perfect layouts and develop complex functionalities by using modern technologies. I enjoy working with agencies and enthusiastic people who want to solve problems through beautiful designs and experiences.I always strive to create memorable experiences that are aesthetically appealing, functional and distinctive. Whether it's inspiring marketing websites, convincing e-commerce sites or apps that are truly beneficial to users...
                        If you want to work together on a project or just have a chat, please don't hesitate to get in touch with me via email below.
                        </p>
                    <p className="P-about-left-text2" data-aos="fade-right" data-aos-duration="700">
                    </p>
                    <p className="P-about-left-text2" data-aos="fade-up-right" data-aos-duration="700">
                    </p>
                    <p className="P-about-left-text2" data-aos="flip-up" data-aos-duration="700">
                    </p>
                </div>
                <div className="P-about-right">
                    <h2 className="P-about-right-title"></h2>
                    <p className="P-about-right-contact"></p>
                    <div className="P-about-right-img"  data-aos="flip-right" style={{backgroundImage:`url('${myImg}')`}}><div className="P-about-my-image"></div></div>
                    <p className="P-about-right-info"  data-aos="flip-left"
                       data-aos-easing="ease-out-cubic"
                       data-aos-duration="700">
                    </p>
                    <a href="mailto:armenmuradya06@gmail.com" className='P-about-email' data-aos="zoom-in">Send me an email</a>
                </div>
            </div>
        </div>
    )
}
export default About