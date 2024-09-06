import React from 'react'
import { Link} from 'react-scroll';
import './Header.css'
import i18n from "i18next";
import cookies from 'js-cookie';

const Header=()=> {
  const lng=cookies.get('i18next')||"en"
    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
        
      
    };
  return (
    <>
    <header className='header'>
        <div className='container'>
        <div className='logo'>
           <a href=''>
            Shadi 
            <span className='gradient-text-color'>
             -Alhamdo
            </span>
           </a>
        </div>
        <div className='links'>
                <ul>
                    <li><Link to='home' activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>{lng=="ar"?"الصفحة الرئيسية":"Home"}</Link></li>
                    <li><Link to='about'activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>{lng=="ar"?"لمحة عني":"About Me"}</Link></li>
                    <li><Link to='projects' activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>{lng=="ar"?" المشاريع":"Projects"}</Link></li>
                    <li><Link to='services'activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>{lng=="ar"?" الخدمات":"Services"}</Link></li>
                    <li><Link to='contact' activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>{lng=="ar"?" تواصل معي":"Contact Me"}</Link></li>
                </ul>
        </div>
        <select name="language" id="language" onChange={handleChange}>
            <option>language</option>
            <option value="en" >English</option>
            <option value="ar">العربية</option>
        </select>
        </div>
        
    </header>
    </>
  )
}

export default Header