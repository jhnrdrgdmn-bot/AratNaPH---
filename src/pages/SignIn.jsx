import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

export default function SignIn() {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: "749687669182-03enrdmmisfc4sni69bt9ejnta1dd24o.apps.googleusercontent.com", // replace with your client ID
        callback: handleCredentialResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById("googleSignInDiv"),
        { theme: "outline", size: "large", width: "100%" } // button options
      );
    }
  }, []);

  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    // Here you can decode the token or send it to your backend
  }

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

      <section className="login-page">
        <div className="login-container">
          <img src="/images/Logo.png" alt="AratNaPH" className="login-logo" />
          <h2>AratNaPH</h2>

          {/* Google Sign-In Button */}
          <div id="googleSignInDiv"></div>

          <p>or</p>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="login-btn">Log In</button>
          </form>
          <div className="login-links">
            <button type="button" className="link-button">Use single-sign on</button> | 
            <button type="button" className="link-button">Reset Password</button>
          </div>
          <p className="signup-text">
            No Account? <button type="button" className="link-button">Create one</button>
          </p>
        </div>
      </section>
    </>
  );
}
