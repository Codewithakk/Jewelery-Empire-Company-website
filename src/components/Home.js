import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {

  const scrollToSection = (className) => {
    const section = document.querySelector(className);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="logic-branch">
      <div className="logic-branch-child" />
      <div className="input-container">
        <div className="decision-maker-wrapper">
          <div className="decision-maker">(800) 120 2387</div>
        </div>
        <div className="loop-control">
          <div className="search-bar">
            <div className="search-bar-child" />
            <div className="search-for-gold">
              Search for Gold jewellery, Diamond Jewellery and more ...
            </div>
            <div className="error-handler">
              <img
                className="akar-iconssearch"
                alt=""
                src="/akariconssearch.svg"
              />
            </div>
          </div>
        </div>
        <div className="parallel-processor">
          <img
            className="dashiconsfacebook-alt"
            loading="lazy"
            alt=""
            src="/dashiconsfacebookalt.svg"
          />
        </div>
        <div className="data-splitter">
          <div className="akar-iconstwitter-fill-parent">
            <img
              className="akar-iconstwitter-fill"
              loading="lazy"
              alt=""
              src="/akariconstwitterfill.svg"
            />
            <img
              className="ant-designinstagram-outlined-icon"
              loading="lazy"
              alt=""
              src="/antdesigninstagramoutlined.svg"
            />
          </div>
        </div>
      </div>
      <div className="logic-branch-inner">
        <div className="frame-parent1">
          <div className="home-wrapper">
            {/* <Link to=".frame-section" className="home">Home</Link> */}
            <div className="home" onClick={() => scrollToSection('.frame-section')} >Home</div>
          </div>
          <div className="gallery-wrapper">
            {/* <Link to="/gallery" className="gallery">Gallery</Link> */}
            <div className="Gallery" onClick={() => scrollToSection('.color-palette')} >Gallery</div>
          </div>
          <div className="info-wrapper">
            {/* <Link to="/info" className="info">Info</Link> */}
            <div className="info" onClick={() => scrollToSection('.frame-parent4')} >Info</div>
          </div>
          <div className="frame-parent2">
            <div className="frame-wrapper1">
              <div className="jewelry-empire-parent">
                <h1 className="jewelry-empire">Jewelry Empire</h1>
                <div className="vector-parent">
                  <img
                    className="frame-child"
                    loading="lazy"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <h1 className="je">JE</h1>
                </div>
              </div>
            </div>
            <nav className="events-parent">
              {/* <Link to="/events" className="events">Events</Link> */}
              <div className="events" onClick={() => scrollToSection('.advertise-wrapper')} >Events</div>
              {/* <Link to="/products" className="products">Products</Link> */}
              <div className="products" onClick={() => scrollToSection('.frame-wrapper')} >Products</div>
              {/* <Link to="/store-location" className="store-location">Store Location</Link> */}
              <div className="store-location" onClick={() => scrollToSection('.label-maker')} >Store Location</div>
            </nav>
          </div>
          <div className="contact-us-wrapper">
            {/* <Link to="/contact-us" className="contact-us">Contact Us</Link> */}
            <div className="contact-us" onClick={() => scrollToSection('.label-maker1')} >contact us</div>
          </div>
          <div className="login-wrapper">
            <Link to="#" className="login">Login</Link>
            {/* <div className="login" onClick={() => scrollToSection('.info-section')} >Login</div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
