export default function Footer() {
    return (
      <footer
        className="text-center py-2"
        style={{
            backgroundColor: "#343a40",
            color: "white",
        }}
      >
        <div className="container">         
            <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                © 2025 Viaggiatori Felici. Tutti i diritti riservati.
            </p>
          <p className="mb-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", margin: "0 10px", textDecoration: "none" }}
              onMouseOver={(e) => (e.target.style.color = "#ffdd59")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              Facebook
            </a>
            |
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", margin: "0 10px", textDecoration: "none" }}
              onMouseOver={(e) => (e.target.style.color = "#ffdd59")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              Instagram
            </a>
            |
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", margin: "0 10px", textDecoration: "none" }}
              onMouseOver={(e) => (e.target.style.color = "#ffdd59")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              Twitter
            </a>
          </p>
        </div>
      </footer>
    );
  }
  