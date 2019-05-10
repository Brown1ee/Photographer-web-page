import Layout from "../components/Layout";

const Wanderlust = () => (
  <Layout>
    <div className="images-container">
      <div className="image-and-text">
        <h2>amazing sunset</h2>
        <img
          className="image"
          src="https://i.pinimg.com/originals/11/51/be/1151be057270f12954885cc0ff3f395d.jpg"
        />
      </div>
      <div className="image-and-text">
        <h2>special morning</h2>
        <img
          className="image"
          src="https://www.wander-lust.nl/wp-content/uploads/2017/01/Tara-Milk-Tea-e1485123903564.jpg"
        />
      </div>
      <div className="image-and-text">
        <h2>what a view</h2>
        <img
          className="image"
          src="http://campsbaygirl.com/wp-content/uploads/2017/03/1488627688QvP5xx.jpg.jpg"
        />
      </div>
      <div className="image-and-text">
        <h2>when in desert</h2>
        <img
          className="image"
          src="http://mymodernmet.com/wp/wp-content/uploads/2017/04/jack-morris-instagram-travel-1.jpg"
        />
      </div>
      <div className="image-and-text">
        <h2>on the road to</h2>
        <img
          className="image"
          src="https://www.savoirflair.com/pictures/w/450/1/95/ffffff/wp-content/uploads/2017/07/sincerely-jules-map-car-travel-IG-post.jpg"
        />
      </div>
      <div className="image-and-text">
        <h2>stunning place</h2>
        <img
          className="image"
          src="https://content.api.news/v3/images/bin/63c585aac4274cbc7a08dac6abef3b20?width=650"
        />
      </div>
      <div className="image-and-text">
        <h2>winter paradise</h2>
        <img
          className="image"
          src="https://data.whicdn.com/images/322557894/large.jpg"
        />
      </div>
      <div className="image-and-text">
        <h2>special place for us</h2>
        <img
          className="image"
          src="https://i.pinimg.com/736x/23/ec/44/23ec44daa7cc537d51a862cdb5be4e0d.jpg"
        />
      </div>
      <div className="image-and-text">
        <h2>blue lagoon</h2>
        <img
          className="image"
          src="http://comejourney.org/wp-content/uploads/beautiful-breathtaking-scenery-places-pinterest-breathtaking-travel-destinations.jpg"
        />
      </div>
    </div>
    <style jsx>
      {`
        .images-container {
          display: flex;
          flex-wrap: wrap;
          width: 80%;
          margin: auto;
          justify-content: center;
          margin-top: 30px;
        }
        h2 {
          text-align: center;
          color: #4a4a4a;
          font-family: "Didact Gothic", sans-serif;
          font-weight: lighter;
        }
        .image-and-text {
        }
        .image {
          width: 300px;
          height: 400px;
          padding: 10px;
        }
      `}
    </style>
  </Layout>
);

export default Wanderlust;
