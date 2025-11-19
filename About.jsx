export default function About() {
  return (
    <div>

      {/* ------ PAGE STYLES ------ */}
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #eef7fb;
        }
        
        header {
          background: #d9eaf1;
          padding: 15px 40px;
          height: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #ccc;
        }

        header nav a {
          margin: 0 15px;
          text-decoration: none;
          color: #333;
          font-weight: bold;
        }

        .logo img {
          height: 100px;
          width: auto;
          display: block;
        }

        .auth-links a {
          margin-left: 20px;
          text-decoration: none;
          font-weight: bold;
          color: #000;
        }

        .hero {
          position: relative;
          background: url('/images/haha.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          color: white;
          text-align: center;
          padding: 120px 60px;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          z-index: 1;
        }

        .hero .overlay {
          position: relative;
          z-index: 2;
          max-width: 900px;
        }

        footer {
          background-color: #d8e8ef;
          padding: 40px 70px;
        }
        .footer-grid {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
      `}</style>

      {/* --------- HERO SECTION --------- */}
      <section className="hero">
        <div className="overlay">
          <h1>About AratNaPH</h1>
          <p>We're passionate about showcasing the beauty of the Philippines<br />
            and creating unforgettable travel experiences.
          </p>

          <div className="hero-text">
            <p>
              Aratnaph is your all-in-one travel companion designed to make
              exploring the Philippines easier, smarter, and more exciting!
            </p>
            <p>
              Our name comes from the Filipino expression “Arat na!” — meaning “Let’s go!” —
              because we believe every journey begins with the excitement of saying yes to adventure.
            </p>

            <h3>At AratNaPH, we aim to:</h3>
            <ul>
              <li>Make travel simple and convenient through easy online booking.</li>
              <li>Highlight the beauty of local destinations and support Filipino tourism.</li>
              <li>Connect travelers and local tour providers for authentic experiences.</li>
            </ul>

            <p>Your next adventure is just a click away — Arat na with Aratnaph!</p>
          </div>
        </div>
      </section>

      {/* --------- FOOTER --------- */}
      <footer>
        <div className="footer-grid">
          <div>
            <strong>AratNaPH</strong>
            <p>Your trusted partner for discovering the beauty of the Philippines.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <p>Destinations</p>
            <p>Hotels</p>
            <p>Packages</p>
            <p>Book Now</p>
          </div>
          <div>
            <h4>Support</h4>
            <p>Help Center</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div>
            <h4>Contact Info</h4>
            <p>📍 Manila, Philippines</p>
            <p>📞 +63 900 000 0000</p>
            <p>✉ support@aratnaph.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
