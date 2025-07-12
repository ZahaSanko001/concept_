import React from "react";
import "./Hero.css"; // Assuming you have a CSS file for styling
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap"; // Ensure you have split-type installed
gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const videoRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useGSAP(() => {
      const heroSplit = new SplitText('.hero h1', { type: 'chars, words' });
      const heroSubtitleSplit = new SplitText('.hero-split', { type: 'lines' });

      gsap.from(heroSplit.chars, {
        yPercent: 100,
        duration: 1.8,
        ease: 'expo.out',
        stagger: 0.06,
      });

      gsap.from(heroSubtitleSplit.lines, {
        opacity: 0,
        yPercent: 100,
        duration: 1.8,
        ease: 'expo.out',
        stagger: 0.06,
        delay: 1,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      })
      .to('.img-left', { y: 500 }, 0)
      .to('.img-right', { y: -500 }, 0)



      const startValue = isMobile ? 'top top' : 'top top';
      const endValue = isMobile ? 'bottom top' : 'bottom top';

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: videoRef.current,
          start: startValue,
          end: endValue,
          scrub: true,
          pin: true,
        }
      });

      videoRef.current.onloadedmetadata = () => {
        tl.to(videoRef.current, {
          currentTime: videoRef.current.duration
        })
      }



  }, []);

  return (
    <>
    <section className="hero">
        <div className="hero-images">
          <img src="/images/hero-left-leaf.png" alt="" className="img-left"/>
          <div className="hero-content">
            <h1>MOJITO</h1>
            <div className="hero-line">
              <div className="line">
                <p className="hero-subtitle">Cool. Crisp. Classic</p>
                <p className="hero-description hero-split">Sip the Spirit <br /> of Summer</p>
              </div>
              <div className="hero-split"><p>Every cocktail on our menu is <br />a blend of premium ingredients, <br />creative flair, and timeless recipes <br /> - designed to delite your senses</p></div>
            </div>
            <a href="cock" className="cocktail">View Cocktails</a>
          </div>
          <img src="/images/hero-right-leaf.png" alt="" className="img-right"/>
        </div>
        <div className="video">
          <video ref={videoRef} src="/videos/output.mp4" playsInline muted preload="auto"></video>
        </div>
    </section>
    </>
  );
};

export default Hero;
