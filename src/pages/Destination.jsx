import { Link } from "react-router-dom";
import "./Destination.css";

export default function Destination() {
  return (
    <>
      <header>
        <Link to="/Home" className="logo">
          <img src="/images/Logo.png" alt="AratNaPH Logo" />
        </Link>

        <nav>
          <Link to="/Destination" className="active">Destinations</Link>
          <Link to="/Hotel">Hotels</Link>
          <Link to="/About">About Us</Link>
          <Link to="/Contact">Contact</Link>
        </nav>

        <div>
          <Link to="/SignIn">Sign In</Link> | <Link to="/BookNow">Book Now</Link>
        </div>
      </header>

      <h2 className="title">Explore Destinations</h2>

      <div className="grid">

        {/* BAGUIO */}
        <div className="card">
          <img src="/images/Baguio.jpg" alt="Baguio destination" />
          <div className="info">
            <h3>📍 Baguio</h3>
            <p>The Summer Capital of the Philippines, known for its cool climate, pine trees, and vibrant culture.</p>
            <div className="highlights">Top Highlights:</div>
            <ul>
              <li>Mines View Park</li>
              <li>Strawberry Farm</li>
              <li>Burnham Park</li>
            </ul>
            <button>View Tours</button>
          </div>
        </div>

        {/* CORON */}
        <div className="card">
          <img src="/images/Coron.jpg" alt="Coron destination" />
          <div className="info">
            <h3>📍 Coron</h3>
            <p>Known for crystal-clear lakes, dramatic limestone cliffs, and world-class diving spots.</p>
            <div className="highlights">Top Highlights:</div>
            <ul>
              <li>Twin Lagoon</li>
              <li>Hidden Lagoon</li>
              <li>Smith Coral Garden</li>
            </ul>
            <button>View Tours</button>
          </div>
        </div>

        {/* BOHOL */}
        <div className="card">
          <img src="/images/Bohol.jpg" alt="Bohol destination" />
          <div className="info">
            <h3>📍 Bohol</h3>
            <p>Home to the Chocolate Hills, tarsiers, and stunning beaches.</p>
            <div className="highlights">Top Highlights:</div>
            <ul>
              <li>Alona Beach</li>
              <li>Panglao Beach</li>
              <li>Bilar Man-Made Forest</li>
            </ul>
            <button>View Tours</button>
          </div>
        </div>

        {/* BORACAY */}
        <div className="card">
          <img src="/images/Boracay.jpg" alt="Boracay destination" />
          <div className="info">
            <h3>📍 Boracay</h3>
            <p>Famous for its powdery white sand and vibrant nightlife.</p>
            <div className="highlights">Top Highlights:</div>
            <ul>
              <li>Mount Luho</li>
              <li>Crystal Cove</li>
              <li>Crocodile Island</li>
            </ul>
            <button>View Tours</button>
          </div>
        </div>

        {/* MANILA */}
        <div className="card">
          <img src="/images/Manila.jpg" alt="Manila destination" />
          <div className="info">
            <h3>📍 Manila</h3>
            <p>The bustling capital mixing history and modern attractions.</p>
            <div className="highlights">Top Highlights:</div>
            <ul>
              <li>Intramuros</li>
              <li>Manila Cathedral</li>
            </ul>
            <button>View Tours</button>
          </div>
        </div>

        {/* CEBU */}
        <div className="card">
          <img src="/images/Cebu.jpg" alt="Cebu destination" />
          <div className="info">
            <h3>📍 Cebu</h3>
            <p>Rich in history and natural wonders, from beaches to mountains.</p>
            <div className="highlights">Top Highlights:</div>
            <ul>
              <li>Magellan's Cross</li>
              <li>Fort San Pedro</li>
            </ul>
            <button>View Tours</button>
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
