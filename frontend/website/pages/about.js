import { Component } from "react";

import Header from "../components/header.js";
import Footer from "../components/footer.js";
import HeadMetadata from "../components/headMetadata.js";

export default class extends Component {
  render() {
    return (
      <div className='layout-wrapper'>
        <HeadMetadata
          title='About Me | Coding Blog'
          metaDescription='Wanderson Serra is a full stack software developer that
           also writes about modern NodeJS and JavaScript, as well other programming languages.'
        />
        <Header />
        <div className='about-container'>
          <div className='about-section'>
            <h1>Sobre</h1>
            <p>
              Sou Wanderson, programador, músico e escritor de artigos técnicos.
            </p>
            <p>
              Iniciei este site com a ideia de documentar o que tenho aprendido,
              enquanto busco por uma transição de carreira. Vou aprendendo, e
              aplicando os conhecimentos neste e outros projetos.
            </p>
          </div>
          <div className='about-section'>
            <h2>Meus Projetos</h2>
            <ul>
              <li>
                <a href='#'>Projeto 1</a> - Sobre o projeto 1
              </li>
              <li>
                <a href='#'>Projeto 2</a> - Sobre o projeto 2
              </li>
              <li>
                <a href='#'>Projeto 3</a> - Sobre o projeto 3
              </li>
              <li>
                <a href='#'>Projeto 4</a> - Sobre o projeto 4
              </li>
            </ul>
          </div>
          <div className='about-section'>
            <h2>Equipamento usado atualmente</h2>
            <ul>
              <li>
                <strong>Computador</strong>: Custom ArchLinux PC
              </li>
              <li>
                <strong>Hosting</strong>: <a href='#'>DigitalOcean</a>
              </li>
              <li>
                <strong>Editor</strong>:{" "}
                <a href='https://code.visualstudio.com/'>VSCode</a>
              </li>
              <li>
                <strong>Coding Framework</strong>:{" "}
                <a href='https://nextjs.org'>Next.js</a>
              </li>
              <li>
                <strong>Syntax Highlighting</strong>:{" "}
                <a href='https://prismjs.com'>PrismJS</a>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
