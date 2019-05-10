import Head from "next/head";
import Navbar from "./Navbar";
import Toggle from "./Toggle";
import Copyrights from "./copyrights";

const Layout = props => (
  <div>
    <Head>
      <title>Xenia Brown Photography</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
      />

      <link rel="icon" href="../static/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Didact+Gothic|Quicksand"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossOrigin="anonymous"
      />
    </Head>
    <Navbar />
    <Toggle />

    {props.children}
    <Copyrights />
  </div>
);

export default Layout;
