import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta
          name="description"
          content="Reviews de tecnología y gadgets. Cursos de Adobe Photoshop. Desarrollo de páginas web y diseño gráfico"
        />
        <meta name="author" content="Pixel40" />
        <meta property="og:image" content="img/avatar.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Nanum+Gothic:wght@400;700;800&family=Roboto+Slab:wght@300;400;700&family=Solitreo&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <div id="backdrop-overlay" />
      <div id="modal-overlay" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
