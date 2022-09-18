import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html className="h-full">
        <Head />
        <body className="h-full dark:bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
