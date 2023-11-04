import { Component } from "react";

export default class extends Component {
  render() {
    return (
      <header className='header-wrapper'>
        <div className='header-container'>
          <div className='header-logo'>
            <a href='/'>
              <span className='header-logo-icon'>
                <img src='/images/progrmm.png' alt='' />
              </span>
              <span className='header-logo-text'>Wanderson Coutinho Serra</span>
            </a>
          </div>
          <div className='header-links'>
            <a href='/blog'>Blog</a>
            <a href='/about'>Sobre</a>
            <a href='/contact'>Contato</a>
          </div>
        </div>
      </header>
    );
  }
}
