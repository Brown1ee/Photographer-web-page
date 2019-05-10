import Layout from "../components/Layout";

const Contacts = () => (
  <Layout>
    <div>
      <div className="form-and-image">
        <img src="../static/photographer.jpg" />
        <form>
          <p>
            Pentru a primi oferta despre serviciile fotografice la evenimentul
            dvs., completați formularul de mai jos:
          </p>
          <input placeholder="NAME" />
          <input placeholder="E-MAIL*" />
          <input placeholder="FACEBOOK/INSTAGRAM PERSONAL PROFILE (link)*" />
          <input placeholder="DATA REZERVARII" />
          <input placeholder="LOCUL EVENIMENTULUI" />
          <input placeholder="DESCRIEREA NUNTII" />
          <button>SEND</button>
        </form>
      </div>
    </div>
    <style jsx>{`
      p {
        font-family: "Didact Gothic", sans-serif;
        font-weight: lighter;
        padding-left: 10px;
        font-size: 15px;
        font-style: italic;
        color: #4a4a4a;
      }
      button {
        border-radius: 30px;
        height: 50px;
        background-color: silver;
        color: white;
        border: none;
      }
      button:hover {
        background-color: grey;
      }
      .form-and-image {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 50px;
      }
      form {
        display: flex;
        flex-direction: column;
        width: 500px;
        margin-left: 50px;
      }
      input {
        height: 50px;
        margin: 10px;
        padding-left: 10px;
        font-size: 10px;
      }
      img {
        width: 400px;
        height: 400px;
      }
      @media only screen and (max-width: 500px) {
        .form-and-image {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 50px;
        }
        form {
          display: flex;
          flex-direction: column;
          width: 80%;
          margin: auto;
          margin-top: 30px;
        }
        input {
          height: 50px;
          margin: 10px;
          padding-left: 10px;
          font-size: 10px;
          display: flex;
          flex-wrap: wrap;
          border: 1px solid silver;
        }
        img {
          width: 95%;
          height: 400px;
        }
        button {
          border-radius: 30px;
          height: 40px;
          background-color: silver;
          color: white;
          border: none;
        }
      }
    `}</style>
  </Layout>
);

export default Contacts;
