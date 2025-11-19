import "./Contact.css";

export default function Contact() {
  return (
    <>
      <header>
        <a href="/Homepage" className="logo">
          <img src="/images/Logo.png" alt="AratNaPH Logo" />
        </a>

        <nav>
          <a href="/Destination">Destinations</a>
          <a href="/Hotel">Hotels</a>
          <a href="/AboutUs">About Us</a>
          <a href="/Contact" className="active">Contact</a>
        </nav>

        <div>
          <a href="/SignIn">Sign In</a> | <a href="/BookNow">Book Now</a>
        </div>
      </header>

      <h1>Get In Touch</h1>
      <p className="subtitle">Have questions? We're here to help you plan your perfect trip</p>

      <div className="contact-options">
        <div className="contact-box">
          <img src="/images/call-icon.png" alt="Call" />
          <h3>Call Us</h3>
          <p>Mon–Fri 9am–6pm<br />+63 XXX XXX XXXX</p>
        </div>

        <div className="contact-box">
          <img src="/images/email-icon.png" alt="Email" />
          <h3>Email Us</h3>
          <p>We'll respond within 24 hours<br />email@example.com</p>
        </div>

        <div className="contact-box">
          <img src="/images/location-icon.png" alt="Visit" />
          <h3>Visit Us</h3>
          <p>123 street St.<br />Quezon City</p>
        </div>
      </div>

      <div className="message-box">
        <h2>Send Us a Message</h2>
        <form>
          <div className="name-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone Number" />
          <textarea rows="5" placeholder="Message"></textarea>
          <button>Send Message</button>
        </form>
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
