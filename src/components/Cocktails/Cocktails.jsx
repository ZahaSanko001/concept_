import React from "react";
import "./Cocktails.css";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const Cocktails = () => {
/*   useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.cocktails',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
        markers: true,
      }
    })

    parallaxTimeline.from('.l-leaf', {
      x: -100, y: 100
    })
    parallaxTimeline.from('.r-leaf', {
      x: 100, y: 100
    })
  }) */


  return (
    <section className="cocktails">

      <div className="cock-leafs">
        <img src="/images/cocktail-left-leaf.png" alt="" className="l-leaf"/>
        <img src="/images/cocktail-right-leaf.png" alt="" className="r-leaf"/>
      </div>
      
      <div className="menu-container">


        <div className="menu-column">

          <h3>Most popular cocktails:</h3>

          <div className="menu-item">
            <div className="item-info">
              <h4>Chapel Hill Shiraz</h4>
              <p>AU | Battle</p>
            </div>
            <div className="price">– $10</div>
          </div>

          <div className="menu-item">
            <div className="item-info">
              <h4>Chapel Hill Shiraz</h4>
              <p>AU | Battle</p>
            </div>
            <div className="price">– $10</div>
          </div>

          <div className="menu-item">
            <div className="item-info">
              <h4>Chapel Hill Shiraz</h4>
              <p>AU | Battle</p>
            </div>
            <div className="price">– $10</div>
          </div>

          <div className="menu-item">
            <div className="item-info">
              <h4>Chapel Hill Shiraz</h4>
              <p>AU | Battle</p>
            </div>
            <div className="price">– $10</div>
          </div>

        </div>


        <div className="menu-column">

          <h3>Most loved mocktails:</h3>

          <div className="menu-item">
            <div className="item-info">
              <h4>Tropical Bloom</h4>
              <p>US | Battle</p>
            </div>
            <div className="price">– $10</div>
          </div>

          <div className="menu-item">
            <div className="item-info">
              <h4>Tropical Bloom</h4>
              <p>US | Battle</p>
            </div>
            <div className="price">– $10</div>
          </div>

          <div className="menu-item">
            <div className="item-info">
              <h4>Tropical Bloom</h4>
              <p>US | Battle</p>
            </div>
            <div className="price">– $10</div>
          </div>

          <div className="menu-item">
            <div className="item-info">
              <h4>Tropical Bloom</h4>
              <p>US | Battle</p>
            </div>
            <div className="price">– $10</div>
          </div>
        </div>


      </div>

      
    </section>
  )
}

export default Cocktails;