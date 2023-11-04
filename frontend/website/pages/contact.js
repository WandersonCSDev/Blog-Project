import { Component } from "react";

import Header from "../components/header.js";
import Footer from "../components/footer.js";
import HeadMetadata from "../components/headMetadata.js";

export default class extends Component {
  render() {
    return (
      <div className='layout-wrapper'>
        <Header />
        <HeadMetadata
          title='Contact | Coding Blog'
          metaDescription='If you have any comments, ideas, critiques, or you just want to say hi,
           you can contact me via email or the links listed below.'
        />
        <div className='contact-container'>
          <div className='contact-section'>
            <h1>Contatos</h1>
            <p>
              Oi, sou Wanderson, programador full stack, atualmente vivo na área
              metropolitana de Brasília-DF. Escrevo sobre JavaScript moderno e
              estou criando alguns artigos e tutoriais, para ensinar pessoas
              como construir aplicações reais para o mundo real.
            </p>
            <p>
              Caso você tenha algum comentário, ideia ou críticas, ou apenas
              quiser dizer um "oi", fique a vontade para enviar seu e-mail para
              wanderson.net@outlook.com.br !
            </p>
          </div>
          <div className='contact-section'>
            <h2>Pela Web</h2>
            <ul>
              <li>
                <strong>Email</strong>: wanderson.net@outlook.com.br
              </li>
              <li>
                <strong>GitHub</strong>:{" "}
                <a href='https://github.com/WandersonCSDev'>WandersonCSDev</a>
              </li>
              <li>
                <strong>Instagram</strong>:{" "}
                <a href='https://www.instagram.com/wandersoncserra/'>
                  @wandersoncserra
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
