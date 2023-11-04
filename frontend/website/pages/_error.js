import { Component } from "react";

import Header from "../components/header.js";
import Footer from "../components/footer.js";
import HeadMetadata from "../components/headMetadata.js";

export default class extends Component {
  static getInitialProps({ req, res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;

    return {
      statusCode: statusCode,
    };
  }

  render() {
    return (
      <div className='layout-wrapper'>
        <HeadMetadata title='Error | Coding Blog' />
        <Header />
        <div className='error-container'>
          {this.props.statusCode === 404 ? (
            <>
              <h1>404 Página não encontrada / Page Not Found</h1>
              <p>
                Parece que não pudemos achar a página que você procurava / We
                can't seem to find the page you're looking for.
              </p>
            </>
          ) : (
            <>
              <h1>500 Ocorreu um erro / An Error Occurred</h1>
              <p>
                Ocorreu um erro ao tentar atender sua solicitação. Por favor
                tente recarregar a página ou voltar para a página inicial. / An
                error occurred when trying to fulfill your request. Please try
                reloading the page or going back to the homepage.
              </p>
            </>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}
