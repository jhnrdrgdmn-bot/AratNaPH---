import { useEffect } from "react";
import "./SignIn.css";

export default function SignIn() {
  useEffect(() => {
    /* global google */
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
        <a href="/Homepage" className="logo">
          <img src="/images/Logo.png" alt="AratNaPH Logo" />
        </a>

        <nav>
          <a href="/Destination">Destinations</a>
          <a href="/Hotel">Hotels</a>
          <a href="/AboutUs">About Us</a>
          <a href="/Contact">Contact</a>
        </nav>

        <div>
          <a href="/SignIn">Sign In</a> | <a href="/BookNow">Book Now</a>
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
            <a href="#">Use single-sign on</a> | 
            <a href="#">Reset Password</a>
          </div>
          <p className="signup-text">
            No Account? <a href="#">Create one</a>
          </p>
        </div>
      </section>
    </>
  );
}
