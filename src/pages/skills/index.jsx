import './style.scss';
import {useState} from "react";
function MySkills(){
    let [skills,setSkills] = useState([
        {
            id:1,
            logo:'icon-html-five',
            name:'Html 5'

        },
        {
            id:2,
            logo:'icon-sass',
            name:'Css 3/Sass'

        },
        {
            id:3,
            logo:'icon-node-dot-js',
            name:'JavaScript'

        },
        {
            id:4,
            logo:'icon-typescript',
            name:'TypeScript'

        },
        {
            id:5,
            logo:'icon-react',
            name:'React JS'

        },
        {
            id:5,
            logo:'icon-redux',
            name:'Redux/Toolkit'

        },
        {
            id:5,
            logo:'icon-figma',
            name:'Figma'

        },
        {
            id:5,
            logo:'icon-github',
            name:'Git'

        },

    ])
    return(<div className='G-container'>
        <div className='P-skillsBox'  data-aos="flip-left" data-aos-duration="700">
            <div className='P-skillsBox-left'>
                <p className="P-skills-info" data-aos="flip-right">Tech I Use</p>
            </div>

            <div className='P-skillsBox-right'>
                <div className='P-skills-description'>
                    {
                        skills.map(elt => <div key={elt.id} className='P-skill-item' data-aos="fade-up-right">
                            {elt.name}
                            <div className={`P-skill-icon ${elt.logo}`} ></div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    </div>)
}
export default MySkills