import { Component } from "react";

import Header from "../components/header.js";
import Footer from "../components/footer.js";
import HeadMetadata from "../components/headMetadata.js";

export default class extends Component {
  render() {
    return (
      <div className='layout-wrapper'>
        <HeadMetadata
          title='Coding Blog'
          metaDescription='Wanderson Serra is a full stack software developer that also
  writes about modern NodeJS and JavaScript, as well other programming languages.'
        />
        <Header />
        <div className='homepage-container'>
          <div className='homepage-introduction'>
            <h1>Oi, sou Wanderson, programador fullstack.</h1>
            <p>
              Programo com NodeJS usando Javascript principalmente, também
              utilizo HTML, CSS e REACT; <br />
              Também programo em outras linguagens como C#, C#.Net,Java e
              Python.
            </p>
          </div>
          <div className='homepage-latest-blog-posts'>
            <h2>
              Últimos posts -
              <a className='homepage-latest-blog-posts-view-all' href='/blog'>
                Ver Tudo
              </a>
            </h2>
            <div className='homepage-latest-blog-posts-list'>
              <a href='/blog/post-title'>
                <div className='homepage-latest-blog-post'>
                  <div className='homepage-latest-thumbnail'>
                    <img src='/images/progrmm.png' alt='símblo programação' />
                  </div>
                  <div className='homepage-latest-blog-post-title'>
                    <h3>Título do post</h3>
                  </div>
                </div>
              </a>
              <a href='/blog/post-title'>
                <div className='homepage-latest-blog-post'>
                  <div className='homepage-latest-thumbnail'>
                    <img src='/images/progrmm.png' alt='símblo programação' />
                  </div>
                  <div className='homepage-latest-blog-post-title'>
                    <h3>Título do post</h3>
                  </div>
                </div>
              </a>
              <a href='/blog/post-title'>
                <div className='homepage-latest-blog-post'>
                  <div className='homepage-latest-thumbnail'>
                    <img src='/images/progrmm.png' alt='símblo programação' />
                  </div>
                  <div className='homepage-latest-blog-post-title'>
                    <h3>Título do post</h3>
                  </div>
                </div>
              </a>
              <a href='/blog/post-title'>
                <div className='homepage-latest-blog-post'>
                  <div className='homepage-latest-thumbnail'>
                    <img src='/images/progrmm.png' alt='símblo programação' />
                  </div>
                  <div className='homepage-latest-blog-post-title'>
                    <h3>Título do post</h3>
                  </div>
                </div>
              </a>
              <a href='/blog/post-title'>
                <div className='homepage-latest-blog-post'>
                  <div className='homepage-latest-thumbnail'>
                    <img src='/images/progrmm.png' alt='símblo programação' />
                  </div>
                  <div className='homepage-latest-blog-post-title'>
                    <h3>Título do post</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className='homepage-projects'>
            <h2>Meus Projetos</h2>
            <div className='homepage-projects-list'>
              <div className='homepage-project'>
                <h3>
                  <a href='https://github.com/WandersonCSDev'>
                    <div className='homepage-project-icon'>#</div>
                    <div className='homepage-project-title'>
                      Título do Projeto
                    </div>
                  </a>
                </h3>
                <p>Algum texto sobre o projeto</p>
                <div className='homepage-project-btns'>
                  <a
                    className='homepage-project-view-btn'
                    href='https://github.com/WandersonCSDev'
                  >
                    Visitar repositório do projeto
                  </a>
                </div>
              </div>
              <div className='homepage-project'>
                <h3>
                  <a href='https://github.com/WandersonCSDev'>
                    <div className='homepage-project-icon'>#</div>
                    <div className='homepage-project-title'>
                      Título do Projeto
                    </div>
                  </a>
                </h3>
                <p>Algum texto sobre o projeto</p>
                <div className='homepage-project-btns'>
                  <a
                    className='homepage-project-view-btn'
                    href='https://github.com/WandersonCSDev'
                  >
                    Visitar repositório do projeto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
