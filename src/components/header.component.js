import React from 'react';
import HeaderImage from '../images/header.png';

export default function Header() {
  return (
    <header class="section__container header__container">
        <div class="header__content">
          <span class="bg__blur"></span>
          <span class="bg__blur header__blur"></span>
          <h4>BEST FITNESS IN THE TOWN</h4>
          <h1><span>MAKE</span> YOUR BODY SHAPE</h1>
          <p>
            Unleash your potential and embark on a journey towards a stronger,
            fitter, and more confident you. Sign up for 'Make Your Body Shape' now
            and witness the incredible transformation your body is capable of!
          </p>
          <button class="btn">Get Started</button>
        </div>
        <div class="header__image">
          <img src={HeaderImage} alt="header" />
        </div>
      </header>
  )
}
