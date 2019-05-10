import Layout from "../components/Layout";
import styled from "styled-components";
import Link from "next/link";

const Index = () => (
  <Layout>
    <Page>
      <Image />
    </Page>
    <Arange>
      <Text>
        <h4>XENIA BROWN</h4>
        <p>portrait, wedding and travel photographer</p>
        <p>in love with photography since 2009</p>
        <p>addicted to natural light</p>
        <p>for general questions, please contact me at</p>
        <p>kseniushka16@gmail.com</p>
      </Text>
      <Portrait src="../static/portrait.jpg" />
    </Arange>
    <hr />
    <h2>LATEST ON MY BLOG</h2>
    <div className="main-container">
      <div className="three-photo">
        <div className="one-image">
          <h3>Models</h3>
          <img
            className="img"
            src="https://cdn.fstoppers.com/styles/full/s3/media/2016/09/15/marissa-alden-organising-a-fashion-photoshoot-without-a-professional-team-1.jpg"
          />
        </div>
        <div className="one-image">
          <h3>Shine Bright</h3>
          <img
            className="img"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/00001-oscar-de-la-renta-fall-2019-bridal-1540849932.jpg"
          />
        </div>
        <div className="one-image">
          <h3>M and E weeding photo shoot</h3>
          <img
            className="img"
            src="https://i.pinimg.com/originals/c6/54/8e/c6548ee979a000d792f3b0be7f10bc05.jpg"
          />
        </div>
      </div>

      <div className="three-photo">
        <div className="one-image">
          <h3>wedding day</h3>
          <img
            className="img"
            src="https://www.blogilates.com/wp-content/uploads/2018/10/thekiss.jpg"
          />
        </div>
        <div className="one-image">
          <h3>Happy day</h3>
          <img
            className="img"
            src="https://img1.southernliving.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/06/main/autumn-charleston-wedding-jophoto-kn5a9998.jpg?itok=qx_rETsz"
          />
        </div>
        <div className="one-image">
          <h3>Australian sunset</h3>
          <img
            className="img"
            src="https://www.seandkate.com/wp-content/uploads/2017/06/spain-wedding-photographer-0049-600x390.jpg"
          />
        </div>
      </div>
    </div>
    <div className="myVideo">
      <video autoPlay muted loop className="video-bg">
        <source src="../static/video.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="description">
      <span>
        <Link href="/backstage">
          <a>
            NEW BACKSTAGE video
            <br />
            click for more
          </a>
        </Link>
      </span>
    </div>
    <div>
      <p className="title">INSTAGRAM</p>
      <div className="insta">
        <div className="first-five">
          <img
            className="photo"
            src="https://queenstowninsider.com/wp-content/uploads/2016/08/girl-taking-picture-sina.jpg"
          />
          <img
            className="photo"
            src="http://lezincnyc.com/wp-content/uploads/2018/10/tumblr-pictures-cool-photography-on-pensarisgood-1440x900.jpg"
          />
          <img
            className="photo"
            src="https://static1.squarespace.com/static/52dd543ae4b0ce292b48a5f6/566f056469a91ab79737075a/566f07cc5a5668e198540d2f/1450118661328/ZackRoifLandscapePhotography.jpg"
          />
          <img
            className="photo"
            src="http://resourcemagonline.com/wp-content/uploads/2015/05/145.jpg"
          />
          <img
            className="photo"
            src="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2018/10/difference-between-photographers-artists-and-instagram-influencers.jpg"
          />
        </div>
        <div className="first-five">
          <img
            className="photo"
            src="https://i.pinimg.com/originals/b5/56/d7/b556d7d2d8de15a4a9884e0aaff79e08.jpg"
          />
          <img
            className="photo"
            src="https://www.hawaiimagazine.com/sites/default/files/sites/default/files/documents/261/09-17-Tcover.jpg"
          />
          <img
            className="photo"
            src="https://www.canon.com.au/-/media/images/stories/inspiring-women-on-instagram/image1womenigmycolourfulworld.ashx?la=en"
          />
          <img
            className="photo"
            src="https://i.dailymail.co.uk/i/pix/2014/12/14/2409C27D00000578-2873135-A_kangaroo_gazes_over_Lucky_Bay_in_Western_Australia_an_area_kno-a-22_1418536428538.jpg"
          />
          <img
            className="photo"
            src="https://www.plannthat.com/wp-content/uploads/2017/10/cocoliui.png"
          />
        </div>
      </div>
    </div>
    <div className="icons">
      <i className="fab fa-instagram" />
      <i className="fab fa-facebook-f" />
      <i className="fab fa-youtube" />
    </div>
    <div className="copyright">&copy;xeniabrown.com</div>

    <style jsx>{`
      i {
        padding: 10px;
        border-radius: 50%;
        margin-top: 20px;
      }
      .icons {
        display: flex;
        justify-content: center;
      }
      .copyright {
        text-align: center;
        color: #4a4a4a;
        font-family: "Didact Gothic", sans-serif;
        padding: 40px;
      }
      .title {
        text-align: center;
        color: #4a4a4a;
        font-family: "Didact Gothic", sans-serif;
      }

      @media only screen and (min-width: 900px) {
        .photo {
          width: 190px;
          height: 190px;
          max-width: 190px;
          max-height: 190px;
          min-width: 150px;
          min-height: 150px;
          padding: 5px;
          cursor: pointer;
          display: flex;
          flex: auto;
        }
        .first-five {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80%;
          flex: auto;
          flex-wrap: wrap;
        }
        .insta {
          display: flex;
          flex-direction: column;
          align-items: center;
          // flex-wrap: wrap;
          width: 100%;
          // flex: auto;
        }
      }

      @media only screen and (max-width: 900px) {
        .first-five {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          width: 80%;
          flex: auto;
        }
        .photo {
          height: 350px;
          width: 350px;
          padding: 5px;
          cursor: pointer;
          // display: flex;
          // flex: auto;
        }
        .insta {
          display: flex;
          // flex-direction: column;
          align-items: center;
          flex-wrap: wrap;
          flex: auto;
          width: 100%;
        }
      }

      @media only screen and (max-width: 400px) {
        .first-five {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          width: 80%;
          flex: auto;
        }
        .photo {
          height: 350px;
          width: 290px;
          padding: 5px;
          cursor: pointer;
          // display: flex;
          // flex: auto;
        }
        .insta {
          display: flex;
          // flex-direction: column;
          align-items: center;
          flex-wrap: wrap;
          flex: auto;
          width: 100%;
        }
      }

      a {
        text-decoration: none;
        color: white;
        font-size: 20px;
        font-family: "Didact Gothic", sans-serif;
      }
      span {
        position: absolute;
        bottom: 40px;
        color: white;
        width: 100%;
        right: 0;
        z-index: 1000;
        display: flex;
        flex: auto;
        text-align: center;
        height: 400px;
        align-items: center;
        justify-content: center;
      }

      .description {
        position: absolute;
        width: 95%;
      }

      @media only screen and (max-width: 1100px) {
        .myVideo {
          display: flex;
          justify-content: center;
          flex: auto;
          max-height: 600px;
          overflow: hidden;
          z-index: -100;
          // width: 100%;
        }
        .video-bg {
          display: flex;
          flex: auto;
          position: relative;
          left: -30px;
          width: 132%;
          height: auto;
          background: transparent url(video-bg.jpg) no-repeat;
          background-size: cover;
        }
      }

      @media only screen and (max-width: 700px) {
        .myVideo {
          display: flex;
          flex: auto;
          max-height: 600px;
          overflow: hidden;
          z-index: -100;
          width: 100%;
        }
        .video-bg {
          display: flex;
          flex: auto;
          position: relative;
          left: -30px;
          width: 132%;
          height: auto;
          background: transparent url(video-bg.jpg) no-repeat;
          background-size: cover;
        }
      }

      @media only screen and (max-width: 400px) {
        .myVideo {
          display: flex;
          flex: auto;
          max-height: 600px;
          overflow: hidden;
          z-index: -100;
          width: 100%;
        }
        .video-bg {
          display: flex;
          flex: auto;
          position: relative;
          left: -5px;
          width: 132%;
          height: auto;
          background: transparent url(video-bg.jpg) no-repeat;
          background-size: cover;
        }
      }

      @media only screen and (min-width: 1100px) {
        .myVideo {
          max-height: 600px;
          overflow: hidden;
          z-index: -100;
        }
        .video-bg {
          position: relative;
          left: -220px;
          width: 142%;
          height: auto;
          background: transparent url(video-bg.jpg) no-repeat;
          background-size: cover;
        }
      }

      hr {
        border-top: 1px dotted #4a4a4a;
        width: 90%;
        display: flex;
        flex: auto;
        margin-top: 20px;
      }
      h3 {
        text-align: center;
        color: #4a4a4a;
        font-family: "Didact Gothic", sans-serif;
        font-weight: lighter;
      }
      .one-image {
        padding: 10px;
      }
      h2 {
        text-align: center;
        color: #4a4a4a;
        font-family: "Didact Gothic", sans-serif;
        font-weight: lighter;
        font-size: 20px;
      }
      .main-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 90%;
        margin: auto;
        padding-right: 0;
        flex: auto;
        flex-wrap: wrap;
      }
      .three-photo {
        display: flex;
        justify-content: center;
        flex: auto;
        flex-wrap: wrap;
      }
      .img {
        height: 390px;
        width: 290px;
        // min-height: 200px;
        // min-width: 200px;
        // display: flex;
        // flex: auto;
      }
    `}</style>
  </Layout>
);

export default Index;

const Arange = styled.div`
  display: flex;
  justify-content: center;
  flex: auto;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Page = styled.div`
  display: flex;
  flex: auto;
  @media (max-width: 500px) {
    min-width: 150px;
    min-height: 200px;
  }
`;

const Image = styled.div`
  background-image: url("https://blog.infinityeventsandcatering.com/wp-content/uploads/2019/01/Lacey-Brandon_Bridge-Building-Wedding_28.jpg");
  height: 580px;
  background-position-y: 13.75%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex: auto;
  @media (max-width: 890px) {
    display: flex;
    flex: auto;
    width: 480px;
    height: 296px;
  }
  @media (max-width: 500px) {
    display: flex;
    flex: auto;
    min-width: 250px;
    min-height: 100px;
  }
`;

const Text = styled.div`
  color: #4a4a4a;
  display: flex;
  flex-direction: column;
  flex: auto;
  align-items: center;
  line-height: 5px;
  justify-content: center;
  font-family: "Didact Gothic", sans-serif;
  max-width: 400px;
  margin-top: 40px;
  margin-right: 50px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-left: 70px;
  }
`;

const Portrait = styled.img`
  display: flex;
  flex: auto;
  max-width: 362px;
  max-height: 362px;
  padding-top: 40px;
`;
