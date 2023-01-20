import './style.scss';
import {NavLink} from "react-router-dom";

function Footer(){
    return(
        <footer className='P-footer-block'>
              <div className='G-container'>
                  <div className='P-footer-container'>
                      <div className='P-footer-left'>
                          <h2 className='P-footer-title'>Get in touch</h2>

                          <a href="tel:+37493219011" className='P-footer-touch'>+374 93219011   <span className='P-footer-touch-icon icon-phone'></span> </a>
                       </div>
                      <div className='P-footer-right'>
                          <p className='P-footer-list'><NavLink to='/about' className='P-footer-navlink'>About Me</NavLink></p>
                          <p className='P-footer-list P-first-list'><NavLink className='P-footer-navlink' to='/projects'>My Skills</NavLink></p>
                          <p className='P-footer-list'><NavLink to='/skills' className='P-footer-navlink'>My Projects</NavLink></p>

                          <div className='P-footer-social'>
                              <a href="https://www.instagram.com/muradian___/" target='_blank' className='P-footer-social-link'><span className='P-footer-social-logo icon-instagram'/></a>
                              <a href="https://www.facebook.com/profile.php?id=100009908355724" target='_blank' className='P-footer-social-link'><span className='P-footer-social-logo icon-facebook'/></a>
                               <a href="https://github.com/muradyanx/" target='_blank' className='P-footer-social-link'><span className='P-footer-social-logo icon-github'/></a>
                              <a href="https://www.linkedin.com/in/armen-muradyan-64169423a/" target='_blank' className='P-footer-social-link'><span className='P-footer-social-logo-linkedin icon-linkedin2'/></a>
                          </div>
                      </div>
                  </div>
              </div>
        </footer>
    )
}
export default Footer