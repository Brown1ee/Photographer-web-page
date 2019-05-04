import Head from "next/head";
import Navbar from "./Navbar";
import Toggle from "./Toggle";

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
    </Head>
    <Navbar />
    <Toggle />
    {props.children}
  </div>
);

export default Layout;
