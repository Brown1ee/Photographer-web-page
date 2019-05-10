import Layout from "../components/Layout";

const Photoshoots = () => (
  <Layout>
    <div>
      <div className="video-container">
        <video controls>
          <source src="../static/movie.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <style jsx>{`
      .video-container {
        display: flex;
        justify-content: center;
        width: 100%;
      }
      video {
        margin: auto;
        width: 80%;
        height: 700px;
      }
    `}</style>
  </Layout>
);

export default Photoshoots;
