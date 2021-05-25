import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const Cta = () => {
    return (
        <div className="callToAction" id="contact">
        <h4>Get in Touch !</h4>
            <div className="footer-icons">
            <i className="icons instagram">
            <a href="https://www.instagram.com/kash.de_/"><InstagramIcon style={{ fontSize: 40,color:"#5c5e5d" }}/></a>
            </i>
            <i className="icons mail">
            <a href="mailto:akashdev064@gmail.com"><MailOutlineIcon style={{ fontSize: 40,color:"#5c5e5d" }}/></a>
            </i>
            <i className="icons whatsapp">
            <a href="https://wa.me/918148222858"><WhatsAppIcon style={{ fontSize: 40,color:"#5c5e5d" }}/></a>
            </i>
            </div>
        </div>
    )
}

export default Cta;
