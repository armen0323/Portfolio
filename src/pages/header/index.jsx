import './style.scss';
import logo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
function Header(){
let [myRef,setMyRef] = useState(null);
let [item,setItem] = useState(null)
    useEffect(()=>{
        window.onscroll = function (){
            setItem(window.scrollY)
            if(item <= 0){
                // myRef.current.style.visibility = 'visible'
                console.log('bb')
            }



        }
    },[item])

    const [openOpClassName,setOpenOpClassName] = useState(false);


    function openOp(){
        setOpenOpClassName(!openOpClassName)
        console.log(1)
    };
    useEffect(()=>{
        if(openOpClassName){
            document.body.classList.add('P-body-hidden')
        }else{document.body.classList.remove('P-body-hidden')}
    })
    return(
        <header className='P-header-container-all '>
            <a href="" className="P-header-top-btn icon-arrow-up" ref={myRef}/>

            <a className='P-home-contact-btn' href="mailto:armenmuradya06@gmail.com">
                <p className="P-massage-icon icon-mass"/>
                <p className="P-home-contact-icon">Contact Me</p>
            </a>
        <div className='P-header-block'>

            <div className='P-header-container G-container'>
                <div className='P-header-Logos'>

                    <NavLink to='/'><div className='P-header-logo' style={{backgroundImage:`url('${logo}')`}}/></NavLink>

                </div>
                <div className='P-header-media-block' onClick={openOp}>
                    <span className={`P-header-media-logo-first ${openOpClassName ? 'P-open-up-first':''}`}/>
                    <span className={`P-header-media-logo-second ${openOpClassName ? 'P-open-up-second':''}`}/>
                    <span className={`P-header-media-logo-third ${openOpClassName ? 'P-open-up-third':''}`}/>
                </div>
            <div className={`P-header-list-wrapper ${openOpClassName ? 'P-open-list':''}`}>
                <ol className={`P-header-Lists `}>
                    <li className='P-header-list'><NavLink to='/'>Home</NavLink> </li>
                    <li className='P-header-list'><NavLink to='/skill'>Skills</NavLink> </li>
                    <li className='P-header-list'> <NavLink to='/skills'>Projects</NavLink> </li>
                    <li className='P-header-list'><NavLink to='/about'>About</NavLink> </li>
                </ol>
            </div>
            </div>
        </div>
        </header>
    )
}
export default Header