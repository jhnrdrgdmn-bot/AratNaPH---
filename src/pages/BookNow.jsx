import { Link } from "react-router-dom";
import "./BookNow.css";

export default function BookNow() {
  return (
    <>
      <header>
        <Link to="/Home" className="logo">
          <img src="/images/Logo.png" alt="AratNaPH Logo" />
        </Link>

        <nav>
          <Link to="/Destination">Destinations</Link>
          <Link to="/Hotel">Hotels</Link>
          <Link to="/About">About Us</Link>
          <Link to="/Contact">Contact</Link>
        </nav>

        <div>
          <Link to="/SignIn">Sign In</Link> | <Link to="/BookNow">Book Now</Link>
        </div>
      </header>

      <h1>Complete Your Booking</h1>
      <p className="subtitle">You're one step away from your dream vacation</p>

      <div className="form-container">
        <div className="section-title">🧍 Personal Information</div>
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="First" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Last" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="email@example.com" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" placeholder="+63 XXX XXX XXXX" />
          </div>
        </div>

        <div className="section-title">📍 Travel Details</div>
        <div className="form-row">
          <div className="form-group">
            <label>Destination</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Number of Travelers</label>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Check-in Date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Check-out Date</label>
            <input type="date" />
          </div>
        </div>

        <div className="section-title">💳 Payment Information</div>
        <div className="form-row">
          <div className="form-group">
            <label>Name on Card</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Card Number</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Expiry Date</label>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input type="text" />
          </div>
        </div>

        <div className="summary-box">
          <p><strong>Booking Summary</strong></p>
          <p>Package Price:</p>
          <p>Service Fee:</p>
          <p>Taxes:</p>
          <hr />
          <p><strong>Total:</strong></p>
        </div>

        <button className="confirm-btn">Confirm Booking</button>
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
