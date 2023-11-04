import { Component } from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";
import HeadMetadata from "../../components/headMetadata";

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
        <div className='blog-posts-container'>
          <h1>Postagens</h1>
          <div className='blog-posts-list'>
            <a href='/blog/posts-list'>
              <div className='blog-posts-list-item'>
                <div className='blog-posts-thumbnail'>
                  <img src='http://placehold.it/100x100' alt='' />
                </div>
                <div className='blog-posts-list-item-title-and-date'>
                  <h2>Título da Postagem</h2>
                  <div className='blog-posts-list-item-date'>
                    <span>8/4/2023</span>
                  </div>
                </div>
              </div>
            </a>
            <a href='/blog/post-title'>
              <div className='blog-posts-list-item'>
                <div className='blog-posts-thumbnail'>
                  <img src='http://placehold.it/100x100' alt='' />
                </div>
                <div className='blog-posts-list-item-title-and-date'>
                  <h2>Título da Postagem</h2>
                  <div className='blog-posts-list-item-date'>
                    <span>9/4/2023</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
