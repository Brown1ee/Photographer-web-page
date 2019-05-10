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

    <div className="blog-image-container">
      <div>
        <h2 className="header">near the lado di braies</h2>
        <img
          className="blog-image"
          src="https://static1.squarespace.com/static/599acb35e58c62168c0713b8/t/59f8d3dee31d191cb6978e45/1509479420988/Lago+di+Braies+-+photo+session?format=500w"
        />
      </div>
      <div>
        <h2 className="header">desert</h2>
        <img
          className="blog-image"
          src="https://www.oncewed.com/wp-content/uploads/2019/02/TaylorPorter-Emily-Riggs-Utah-Editorial-16-1300x1746.jpg"
        />
      </div>
      <div>
        <h2 className="header">rock the world</h2>
        <img
          className="blog-image"
          src="https://i.pinimg.com/originals/0a/32/28/0a3228219bf426f4d056cf84dab7cdc1.jpg"
        />
      </div>
      <div>
        <h2 className="header">forest</h2>
        <img
          className="blog-image"
          src="https://img.onethreeonefour.com/ab9af066-af39-42a7-a25f-82a372a0c4af.jpg"
        />
      </div>
      <div>
        <h2 className="header">glam</h2>
        <img
          className="blog-image"
          src="https://cdn.trendhunterstatic.com/thumbs/women-of-color-editorial.jpeg"
        />
      </div>
      <div>
        <h2 className="header">beautiful day</h2>
        <img
          className="blog-image"
          src="https://www.elopement-photography.com/wp-content/uploads/2019/04/Wedding-Elopement-Lago-Di-Braies-Pragser-WildSee-couple-photos-0001.jpg"
        />
      </div>
      <div>
        <h2 className="header">queen</h2>
        <img
          className="blog-image"
          src="https://tanglewoodestate.com.au/wp-content/uploads/2017/05/Jessica-Rose-Photography_Tanglewood__34-683x1024.jpg"
        />
      </div>
      <div>
        <h2 className="header">love is in the air</h2>
        <img
          className="blog-image"
          src="http://www.melissajill.com/images/content/AZEngagementLocations_231.jpg"
        />
      </div>
    </div>
    <style jsx>{`
      .header {
        text-align: center;
        font-family: "Didact Gothic", sans-serif;
        color: #4a4a4a;
        font-weight: lighter;
      }
      .blog-image-container {
        display: flex;
        width: 80%;
        flex-wrap: wrap;
        justify-content: center;
        margin: auto;
        margin-top: 30px;
      }
      .blog-image {
        width: 300px;
        height: 400px;
        display: flex;
        padding: 20px;
      }

      @media only screen and (max-width: 890px) {
        .blog-image-container {
          display: flex;
          width: 80%;
          flex-wrap: wrap;
          justify-content: center;
          margin: auto;
          margin-top: 30px;
        }
        .blog-image {
          width: 80%;
          height: 500px;
          display: flex;
          padding: 20px;
          margin: auto;
        }
      }

      @media only screen and (max-width: 500px) {
        .blog-image-container {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          justify-content: center;
          margin: auto;
          margin-top: 30px;
        }
        .blog-image {
          width: 80%;
          height: 500px;
          display: flex;
          padding: 20px;
          margin: auto;
        }
      }
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
