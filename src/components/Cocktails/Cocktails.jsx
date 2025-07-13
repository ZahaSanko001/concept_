import React from "react";
import "./Cocktails.css";

const Cocktails = () => {
  return (
    <section className="cocktails">

      <div className="cock-leafs">
        <img src="/images/cocktail-left-leaf.png" alt="" className="l-leaf"/>
        <img src="/images/cocktail-right-leaf.png" alt="" className="r-leaf"/>
      </div>
      
      <div class="menu-container">


        <div class="menu-column">

          <h3>Most popular cocktails:</h3>

          <div class="menu-item">
            <div class="item-info">
              <h4>Chapel Hill Shiraz</h4>
              <p>AU | Battle</p>
            </div>
            <div class="price">– $10</div>
          </div>

          <div class="menu-item">
            <div class="item-info">
              <h4>Chapel Hill Shiraz</h4>
              <p>AU | Battle</p>
            </div>
            <div class="price">– $10</div>
          </div>

          <div class="menu-item">
            <div class="item-info">
              <h4>Chapel Hill Shiraz</h4>
              <p>AU | Battle</p>
            </div>
            <div class="price">– $10</div>
          </div>

          <div class="menu-item">
            <div class="item-info">
              <h4>Chapel Hill Shiraz</h4>
              <p>AU | Battle</p>
            </div>
            <div class="price">– $10</div>
          </div>

        </div>


        <div class="menu-column">

          <h3>Most loved mocktails:</h3>

          <div class="menu-item">
            <div class="item-info">
              <h4>Tropical Bloom</h4>
              <p>US | Battle</p>
            </div>
            <div class="price">– $10</div>
          </div>

          <div class="menu-item">
            <div class="item-info">
              <h4>Tropical Bloom</h4>
              <p>US | Battle</p>
            </div>
            <div class="price">– $10</div>
          </div>

          <div class="menu-item">
            <div class="item-info">
              <h4>Tropical Bloom</h4>
              <p>US | Battle</p>
            </div>
            <div class="price">– $10</div>
          </div>

          <div class="menu-item">
            <div class="item-info">
              <h4>Tropical Bloom</h4>
              <p>US | Battle</p>
            </div>
            <div class="price">– $10</div>
          </div>
        </div>


      </div>

      
    </section>
  )
}

export default Cocktails;