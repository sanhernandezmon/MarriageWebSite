import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './style.css';
import { Link } from 'react-scroll';

const MobileMenu  = () => {
    const [isMenuShow, setIsMenuShow] = useState(false);
    const menuHandler = () => {
        setIsMenuShow(!isMenuShow)
    }
    const closeMenuAndGoTop = () => {
        setIsMenuShow(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div>
            <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                <div className="logo2">
                    <h2><Link to='/home' onClick={closeMenuAndGoTop}>Santiago y Lina</Link></h2>
                </div>
                <ul className="responsivemenu">
                    <li><AnchorLink href='#couple'>Couple</AnchorLink></li>
                    <li><AnchorLink href='#people'>People</AnchorLink></li>
                    <li><AnchorLink href='#dressCode'>DressCode</AnchorLink></li>
                    <li><AnchorLink href='#event'>Events</AnchorLink></li>
                </ul>
                
            </div>

            <div className="showmenu" onClick={menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>         
        </div>
    )

    
}

export default MobileMenu;

