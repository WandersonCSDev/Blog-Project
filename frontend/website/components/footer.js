import { Component } from "react";

export default class extends Component {
  render() {
    return (
      <footer className="footer-wrapper">
        <div className="footer-links">
          <a href="/blog">Blog</a>
          <a href="/about">Sobre</a>
          <a href="/contact">Contato</a>
        </div>
        <div className="footer-bottom-msg">
          <p>
            Handcrafted in Brazil. Unless otherwise noted, all code is free to
            use under the GNU License.
          </p>
        </div>
      </footer>
    );
  }
}
