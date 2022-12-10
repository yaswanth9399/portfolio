import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  // AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer1(){
    return(

        <footer class="footer">
     <div class="footer-content">
    <p class="text"><strong>FIND ME ON 🤝🏻 </strong> </p>
<ul class="socials">
    <li> <a
                  href="https://github.com/yaswanth9399/portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                ><AiFillGithub/></a></li>
    <li> <a
                  href="https://twitter.com/YaswanthPotnuru"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                ><AiOutlineTwitter/></a></li>
    <li><a
                  href="https://www.instagram.com/yaswanth9399/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                ><AiFillInstagram/></a></li>
    <li><a
                  href="https://www.linkedin.com/in/yaswanth-potnuru-709425167"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                ><FaLinkedinIn/></a></li>
    {/* <li><a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                ><AiOutlineMail/></a></li> */}
 </ul>
</div>
     </footer>
    )
}

export default Footer1;