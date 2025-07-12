import React from "react";
import "./Navbar.css";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import  gsap  from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);


const Navbar = () => {

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: "bottom top",
      }
    });

    navTween.fromTo('nav', { backgroundColor: "transparent" }, 
      { 
        backgroundColor: "#00000050", 
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut"
      }
    );

  });


  return (
    <nav>
      <a href="#home" className="home">
          <img src="/images/logo.png" alt="logo" />
          Margarita
      </a>
      
      <ul>
          <li>
            <a href="#Cocktaoils">
              Cocktails
            </a>
          </li>
          <li>
            <a href="#about">
              About Us
            </a>
          </li>
          <li>
            <a href="#services">
              The Art
            </a>
          </li>
          <li>
            <a href="#contact">
              Contact
            </a>
          </li>
      </ul>
    </nav>
  );
};

export default Navbar;
