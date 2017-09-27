import React from 'react';
import BrandLogo from './images/randomLogo.png';
import './styles.css';

export const Header = (props) => {
  return (
    <section id="headSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <h1 id="brandTitle">Random</h1>
            <h4 id="subBrand">The Team Generator</h4>
            <div className="brandLogo">
              <img src={BrandLogo} alt="Random | The Team Generator" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}