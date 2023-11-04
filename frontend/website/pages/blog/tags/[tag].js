import { Component } from "react";

import Header from "../../../components/header.js";
import Footer from "../../../components/footer.js";
import headMetadata from "../../../components/headMetadata.js";

export default class extends Component {
  static async getInitialProps({ query }) {
    return {
      tag: query.tag,
    };
  }

  render() {
    return (
      <div className='layout-wrapper'>
        <HeadMetadata
          title={`Blog posts tagged as "${this.props.tag}" | Coding Blog`}
          metaDescription={`All blog posts tagged as "${this.props.tag}".`}
        />
        <Header />
        <div className='blog-posts-container'>
          <h1>
            Postagens marcadas como <u>{this.props.tag}</u>
          </h1>
          <div className='blog-posts-list'>
            <a href='/blog/post-title'>
              <div className='blog-posts-list-item'>
                <div className='blog-posts-thumbnail'>
                  <img src='http://placehold.it/100x100' alt='' />
                </div>
                <div className='blog-posts-list-item-title-and-date'>
                  <h2>Título do Post</h2>
                  <span>8/04/2023</span>
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
