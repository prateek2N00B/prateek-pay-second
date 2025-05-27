// _app.js
import React from 'react';
import App from 'next/app';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // Set custom response headers
    if (ctx.res) {
      //ctx.res.setHeader('X-Custom-Header', 'Hello World');
      ctx.res.setHeader('Link', '<https://prateekpay.netlify.app/payment-method-manifest.json>; rel="payment-method-manifest"');
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
