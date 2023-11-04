import { Component } from "react";
import Prism from "prismjs";
import { useEffect, useState } from "react";

import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";

import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import HeadMetadata from "../../components/headMetadata.js";

export default class extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
          title="Blog Post Title | Coding Blog"
          metaDescription="This meta description will be pulled from our backend REST API."
        />
        <Header />
        <div className="blog-post-container">
          <div className="blog-post-top-section">
            <h1>Título do Post</h1>
            <div className="blog-post-top-meta"></div>
            <span>8/4/2023</span>
            <a className="blog-post-top-tag-btn" href="/blog/tags/javascript">
              <span>javascript</span>
            </a>
            <a className="blog-post-top-tag-btn" href="/blog/tags/javascript">
              <span>CSS</span>
            </a>
          </div>
        </div>
        <div className="blog-post-body-content">
          <h2>h2 Section Heading</h2>
          <h3>h3 Section Heading</h3>
          <h4>h4 Section Heading</h4>
          <h5>h5 Section Heading</h5>

          <p>
            A short paragraph with a link to{" "}
            <a href="https://www.google.com">Google</a>.
          </p>
          <p>
            An example of a longer paragraph that will be used in your blog
            posts when you create your own website or blog. And add as much
            additional content here as you want. An example of a longer
            paragraph that will be used in your blog posts when you create your
            own website or blog. Also an example of a{" "}
            <a href="#">link could go here</a>.
          </p>
          <p>Ordered List:</p>
          <ol>
            <li>A sentence goes here.</li>
            <li>
              A short code snippet: <code>code snippet</code>
            </li>
            <li>
              A link inside a unordered list bullet{" "}
              <a href="https://www.google.com">Google</a>
            </li>
          </ol>

          <p>Unordered List:</p>
          <ul>
            <li>A sentence goes here.</li>
            <li>
              A short code snippet: <code>code snippet</code>
            </li>
            <li>
              A link inside a unordered list bullet{" "}
              <a href="https://www.google.com">Google</a>
            </li>
          </ul>

          <div className="blog-post-body-code-snippet">
            <nav className="blog-post-body-code-snippet-header">
              <span>example.html</span>
            </nav>
            <pre className="line-numbers language-html">
              <code className="html language-html">
                {`
          <div>
          <div>Html code example<div/>
          </div>
        `}
              </code>
            </pre>
          </div>

          <div className="blog-post-body-code-snippet">
            <nav className="blog-post-body-code-snippet-header">
              <span>example.js</span>
            </nav>
            <pre className="line-numbers language-js">
              <code className="js language-js">
                {`
          // Set your secret key: remember to switch to your live secret key in production
          // See your keys here: https://dashboard.stripe.com/account/apikeys

          const stripe = require('stripe')('sk_test_hZIksNuZZMXLLFn8q5LtPDAm00Y6r5kUg7')

          (async () => {
            const paymentIntent = await stripe.paymentIntents.create({
              amount: 1099,
              currency: 'usd',
            })
          })()
        `}
              </code>
            </pre>
          </div>

          <div className="blog-post-body-code-snippet">
            <nav className="blog-post-body-code-snippet-header">
              <span>Terminal</span>
            </nav>
            <pre className="language-bash">
              <code className="bash language-bash">
                {`
          npm install react
        `}
              </code>
            </pre>
          </div>

          <img src="https://assets.coderrocketfuel.com/css-article-image.png" />

          <blockquote>
            Warning or special message that you want to stand out should be
            placed in this blockquote element.
          </blockquote>
        </div>
        <Footer />
      </div>
    );
  }
}
