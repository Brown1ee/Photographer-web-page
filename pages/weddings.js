import Layout from "../components/Layout";

const Weddings = () => (
  <Layout>
    <div>
      <div className="image-container">
        <div className="image-and-text">
          <h2>on the roof</h2>
          <img
            className="image"
            src="https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/01/1483735777-1483552440-wedding-photos-50.jpeg?crop=1.0xw:1xh;center,top&resize=480:*"
          />
        </div>
        <div className="image-and-text">
          <h2>sunshine</h2>

          <img className="image" src="../static/sunshine.jpg" />
        </div>
        <div className="image-and-text">
          <h2>royal wedding</h2>
          <img
            className="image"
            src="https://blog.stylewe.com/wp-content/uploads/2016/12/beautiful-wedding-3.jpg"
          />
        </div>
        <div className="image-and-text">
          <h2>boho style wedding</h2>
          <img
            className="image"
            src="https://greenweddingshoes.com/wp-content/uploads/2017/08/victoriaerik-wedding-01.jpg"
          />
        </div>
        <div className="image-and-text">
          <h2>special day for two</h2>
          <img className="image" src="../static/special-day-for-two.jpg" />
        </div>

        <div className="image-and-text">
          <h2>beautiful couple</h2>
          <img
            className="image"
            src="https://qtem8v1tya-flywheel.netdna-ssl.com/wp-content/uploads/2017/12/Copy-of-HoustonOaks16119-336.jpg"
          />
        </div>
      </div>
    </div>
    <style jsx>{`
      .image-and-text {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      h2 {
        text-align: center;
        font-family: "Didact Gothic", sans-serif;
        color: #4a4a4a;
        font-weight: lighter;
      }
      .image-container {
        display: flex;
        flex-wrap: wrap;
        width: 90%;
        margin: auto;
        justify-content: center;
      }
      .image {
        width: 450px;
        height: 550px;
        padding: 10px;
        display: flex;
      }

      @media only screen and (max-width: 500px) {
        .image-container {
          display: flex;
          flex-wrap: wrap;
          width: 90%;
          margin: auto;
          justify-content: center;
        }
        .image {
          width: 95%;
          height: 550px;
          padding: 10px;
          display: flex;
        }
      }
    `}</style>
  </Layout>
);

export default Weddings;
