import Layout from "../components/Layout";
import Link from "next/link";

const BlogNavbar = () => (
  <div>
    <ul>
      <li>
        <Link href="/wedding">
          <a>wedding</a>
        </Link>
      </li>
      <li>
        <Link href="/photoday">
          <a>photoday</a>
        </Link>
      </li>
      <li>
        <Link href="/personal">
          <a>personal</a>
        </Link>
      </li>
      <li>
        <Link href="/photography-tips">
          <a>photography tips</a>
        </Link>
      </li>
      <li>
        <Link href="/pregnancy">
          <a>pregnancy</a>
        </Link>
      </li>
      <li>
        <Link href="/wedding-tips">
          <a>wedding tips</a>
        </Link>
      </li>
      <li>
        <Link href="/sets-for-two">
          <a>sets for two</a>
        </Link>
      </li>
      <li>
        <Link href="/wanderlusts">
          <a>wanderlust</a>
        </Link>
      </li>
      <li>
        <Link href="/blackwhite">
          <a>blackwhite</a>
        </Link>
      </li>
      <li>
        <Link href="/portrait">
          <a>portrait</a>
        </Link>
      </li>
      <li>
        <Link href="/family">
          <a>family</a>
        </Link>
      </li>
      <li>
        <Link href="/children">
          <a>children</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      ul {
        display: flex;
        margin: auto;
        flex: auto;
        flex-wrap: wrap;
        justify-content: center;
        align-text: center;
        padding-left: 0;
      }

      ul li {
        list-style: none;
        padding-left: 0;
      }

      ul li a {
        text-decoration: none;
        color: #4a4a4a;
        font-family: "Didact Gothic", sans-serif;
        letter-spacing: 0.1em;
        font-size: 12px;
        line-height: 20px;
        padding: 15px;
      }
      ul li a:hover {
        color: #a6a6ad;
      }
    `}</style>
  </div>
);

const Blog = () => (
  <Layout>
    <BlogNavbar />
  </Layout>
);

export default Blog;
