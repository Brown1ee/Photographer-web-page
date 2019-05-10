const Copyrights = () => {
  return (
    <div>
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
      `}</style>
    </div>
  );
};

export default Copyrights;
