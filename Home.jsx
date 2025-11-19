// src/pages/Home.jsx
export default function Home() {
  return (
    <div>
      <style>{`
        .home-body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #e9f3f9;
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

        .hero {
          background: url('/images/Background.jpg') center/cover no-repeat;
          height: 450px;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .hero h1 {
          font-size: 70px;
          margin: 0;
          font-weight: 900;
        }

        .hero h2 {
          margin: 10px 0;
          font-size: 30px;
        }

        .search-bar {
          background: white;
          padding: 20px;
          display: flex;
          justify-content: center;
          gap: 15px;
          transform: translateY(-30px);
          border-radius: 10px;
          width: fit-content;
          margin: auto;
          box-shadow: 0 2px 10px rgba(0,0,0,0.15);
        }

        .search-bar input, .search-bar select, .search-bar button {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          font-size: 15px;
        }

        .search-bar button {
          background: #007BFF;
          color: white;
          cursor: pointer;
        }

        h3 {
          text-align: center;
          margin-top: 40px;
          color: #333;
        }

        .destinations, .hotels {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: 20px auto;
          max-width: 1000px;
          flex-wrap: wrap;
        }

        .card {
          width: 200px;
          height: 200px;
          border-radius: 15px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          background-size: cover;
          background-position: center;
        }

        .card span {
          position: absolute;
          bottom: 10px;
          left: 10px;
          font-size: 22px;
          color: white;
          font-weight: bold;
          text-shadow: 0 0 5px black;
        }

        .view-btn {
          display: block;
          margin: 10px auto 40px;
          padding: 10px 20px;
          border: 1px solid #333;
          background: white;
          cursor: pointer;
          border-radius: 5px;
        }

        .why-choose {
          background: #ffffff;
          padding: 60px 20px;
          text-align: center;
          margin-bottom: 0;
        }

        .why-choose h3 {
          color: #222;
          font-size: 22px;
          margin-bottom: 40px;
          font-weight: 600;
        }

        .features {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 40px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .feature {
          width: 220px;
          text-align: center;
        }

        .feature i {
          font-size: 38px;
          color: #000;
          margin-bottom: 15px;
        }

        .feature p {
          font-size: 16px;
          color: #222;
          line-height: 1.5;
        }

        footer {
          background: #d9eaf1;
          padding: 40px 20px;
        }
        .footer-grid {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        footer h4 {
          margin-bottom: 10px;
        }
        footer p {
          margin: 6px 0;
        }
      `}</style>

      <div className="home-body">
        <header>
          <a href="/" className="logo">
            <img src="/images/Logo.png" alt="AratNaPH Logo" />
          </a>

          <nav>
            <a href="/destinations" style={{ background: "#fff", padding: "6px 12px", borderRadius: "20px" }}>Destinations</a>
            <a href="/hotels" style={{ background: "#fff", padding: "6px 12px", borderRadius: "20px" }}>Hotels</a>
            <a href="/about" style={{ background: "#fff", padding: "6px 12px", borderRadius: "20px" }}>About Us</a>
            <a href="/contact" style={{ background: "#fff", padding: "6px 12px", borderRadius: "20px" }}>Contact</a>
          </nav>

          <div>
            <a href="/signin">Sign In</a> | <a href="/book">Book Now</a>
          </div>
        </header>

        <section className="hero">
          <h1>LOVE</h1>
          <h2>THE PHILIPPINES</h2>
          <p>Explore the most beautiful places in the Philippines</p>
        </section>

        <div className="search-bar" role="search" aria-label="search hotels">
          <input type="text" placeholder="Where are you going?" />
          <input type="date" />
          <select defaultValue="2 adults - 0 children - 1 room">
            <option>2 adults - 0 children - 1 room</option>
          </select>
          <button>Search</button>
        </div>

        <h3>Our Top Picks Destinations for You</h3>
        <div className="destinations">
          <div className="card" style={{ backgroundImage: "url('/images/Baguio.jpg')" }}><span>Baguio</span></div>
          <div className="card" style={{ backgroundImage: "url('/images/Bohol.jpg')" }}><span>Bohol</span></div>
          <div className="card" style={{ backgroundImage: "url('/images/Coron.jpg')" }}><span>Coron</span></div>
          <div className="card" style={{ backgroundImage: "url('/images/Boracay.jpg')" }}><span>Boracay</span></div>
        </div>
        <button className="view-btn">View All Destinations →</button>

        <h3>Stay at Our Top Hotels</h3>
        <div className="hotels">
          <div className="card" style={{ backgroundImage: "url('/images/Hotel1.jpg')" }}></div>
          <div className="card" style={{ backgroundImage: "url('/images/Hotel2.jpg')" }}></div>
          <div className="card" style={{ backgroundImage: "url('/images/Hotel3.jpg')" }}></div>
          <div className="card" style={{ backgroundImage: "url('/images/Hotel4.jpg')" }}></div>
        </div>
        <button className="view-btn">View All Hotels →</button>

        <section className="why-choose">
          <h3>Why Choose AratNaPH</h3>

          <div className="features">
            <div className="feature">
              <i className="fas fa-search-location" />
              <p>With a lots of carefully picked attractions, hotels & more, you’re sure to find joy</p>
            </div>

            <div className="feature">
              <i className="fas fa-tags" />
              <p>Quality activities. Great prices. Plus, earn AratNaPH credits to save more.</p>
            </div>

            <div className="feature">
              <i className="fas fa-mobile-alt" />
              <p>Book last minute, skip lines & get free cancellation for easier exploring</p>
            </div>

            <div className="feature">
              <i className="fas fa-headset" />
              <p>Read reviews & get reliable customer support. We’re with you at every step.</p>
            </div>
          </div>
        </section>

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
    </div>
  );
}
