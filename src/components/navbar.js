import React from "react";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { GiChewedSkull } from "react-icons/gi";


const Navbar = () => {

    function smoothScrollHome(){
        document.querySelector("#home").scrollIntoView({
            behavior: 'smooth'
        });
    }
    function smoothScrollAbout(){
        document.querySelector("#about").scrollIntoView({
            behavior: 'smooth'
        });
    }
    function smoothScrollSkill(){
        document.querySelector("#skills").scrollIntoView({
            behavior: 'smooth'
        });
    }
    function smoothScrollCTA(){
        document.querySelector("#contact").scrollIntoView({
            behavior: 'smooth'
        });
    }

    return ( 
        // <header className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#000000"}}>
            <div className="container-fluid">
            <a className="navbar-brand" href="../components/header.js"><GiChewedSkull fontsize="large"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="hamburger"><MenuOpenIcon/></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                    <a className="nav-link" onClick={smoothScrollHome} href="#ho">HOME</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" onClick={smoothScrollAbout} href="#ho">ABOUT</a>
                    </li>  
                    <li className="nav-item active">
                    <a className="nav-link" onClick={smoothScrollSkill} href="#ho">SKILLS</a>
                    </li>
                    <li className="nav-item active">
                    <a className="nav-link" onClick={smoothScrollCTA} href="#ho">CONTACT ME</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        // </header>
        
        )
    }

export default Navbar;
