import { Link } from "react-router-dom";
import "./Hotel.css";

export default function Hotel() {
  return (
    <>
      <header>
        <Link to="/Home" className="logo">
          <img src="/images/Logo.png" alt="AratNaPH Logo" />
        </Link>

        <nav>
          <Link to="/Destination">Destinations</Link>
          <Link to="/Hotel" className="active">Hotels</Link>
          <Link to="/About">About Us</Link>
          <Link to="/Contact">Contact</Link>
        </nav>

        <div>
          <Link to="/SignIn">Sign In</Link> | <Link to="/BookNow">Book Now</Link>
        </div>
      </header>

      <h1 className="title">Look for Hotels</h1>

      <div className="grid">
        {/* Hotel 1 */}
        <div className="card">
          <img src="/images/Hotel1.jpg" alt="Sea Residences Moa" />
          <div className="info">
            <h3>Sea Residences Moa – Pasay City - Dar Condotel</h3>
            <p>A cozy, modern stay just steps from the SM Mall of Asia...</p>
            <div className="location">📍 Pasay, Manila (Manila Bay)</div>
            <div className="rating">Very Good <span className="score">8.3</span></div>
            <button className="btn">See Prices</button>
          </div>
        </div>

        {/* Hotel 2 */}
        <div className="card">
          <img src="/images/Makati Hotel.jpg" alt="Makati Hotel" />
          <div className="info">
            <h3>Makati Hotel – Flavors Restaurant</h3>
            <p>Flavors Restaurant brings together the best of Modern Comfort Cuisine...</p>
            <div className="location">📍 Makati, Manila</div>
            <div className="rating">Very Good <span className="score">8.3</span></div>
            <button className="btn">See Prices</button>
          </div>
        </div>

        {/* Hotel 3 */}
        <div className="card">
          <img src="/images/Hotel2.jpg" alt="Somerset Millennium Makati" />
          <div className="info">
            <h3>Somerset Millennium Makati</h3>
            <p>Elegant serviced apartments with modern amenities...</p>
            <div className="location">📍 Makati, Manila</div>
            <div className="rating">Very Good <span className="score">8.0</span></div>
            <button className="btn">See Prices</button>
          </div>
        </div>

        {/* Hotel 4 */}
        <div className="card">
          <img src="/images/Hotel4.jpg" alt="LeBlanc Hotel" />
          <div className="info">
            <h3>LeBlanc Hotel</h3>
            <p>The premiere suite at LeBlanc hotel...</p>
            <div className="location">📍 Rizal, Antipolo</div>
            <div className="rating">Very Good <span className="score">7.9</span></div>
            <button className="btn">See Prices</button>
          </div>
        </div>

        {/* Hotel 5 */}
        <div className="card">
          <img src="/images/Anex.jpg" alt="Anex Hotel" />
          <div className="info">
            <h3>Anex Hotel near US Embassy</h3>
            <p>Comfortable, budget-friendly rooms with access to Manila’s attractions...</p>
            <div className="location">📍 Ermita, Manila</div>
            <div className="rating">Good <span className="score">7.1</span></div>
            <button className="btn">See Prices</button>
          </div>
        </div>

        {/* Hotel 6 */}
        <div className="card">
          <img src="/images/Imperial.jpg" alt="LCONDOTEL Hotel Studio" />
          <div className="info">
            <h3>LCONDOTEL Hotel Studio – at Imperial Plaza near MOA NAIA PITX</h3>
            <p>Stay close to the excitement at LCONDOTEL...</p>
            <div className="location">📍 Parañaque, Manila</div>
            <div className="rating">Very Good <span className="score">8.1</span></div>
            <button className="btn">See Prices</button>
          </div>
        </div>
      </div>

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
    </>
  );
}
