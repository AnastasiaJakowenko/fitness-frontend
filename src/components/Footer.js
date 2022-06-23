import "../style/footer.css";

function Footer() {
  return (
    <>
      <div className="footer">

        <div className="links">
            
          <div className="icons">
          <a href="https://de-de.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-square"></i></a>
          <a href="https://www.instagram.com/?hl=de" target="_blank"><i className="fa-brands fa-instagram-square"></i></a>
          <a href="https://www.youtube.com/" target="_blank"><i className="fa-brands fa-youtube-square"></i></a>
          </div>

          <div className="textlinks">
            <a href="#">Kontakt</a>
            <a href="#">Impressum</a>
          </div>

        </div>

        <p>Copyright G5 © 2022 Magdeburg</p>
       
      </div>

      <h1>Abstandshalter</h1>
      <h1>Abstandshalter</h1>
    </>
  );
}

export default Footer;