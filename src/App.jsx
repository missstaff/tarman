import React from "react";
import "./App.css";
import img from "./assets/6898422321304258235.jpg";

function App() {
  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img
            src={img}
            alt="Tarman Cleaning Services Logo"
            style={styles.logo}
          />
        </div>
        <h1 style={styles.title}>Tarman Cleaning Services</h1>
        <p style={styles.subtitle}>
          Homes • Airbnbs • Sparkling Clean Every Time ✨
        </p>
      </header>
      <main>
        {/* About Section */}
        <div style={styles.fullWidthSection}>
          <section style={styles.aboutSection}>
            <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
            <p style={styles.text}>
              At <strong>Tarman Cleaning Services</strong>, we provide thorough,
              reliable, and affordable cleaning services tailored to your needs.
              Whether it’s a one-time deep clean or regular maintenance, we’ve
              got you covered.
            </p>
            <ul style={styles.bullets}>
              <li style={styles.bulletItem}>
                <span style={styles.checkIcon}>✅</span> Flexible Scheduling
              </li>
              <li style={styles.bulletItem}>
                <span style={styles.checkIcon}>✅</span> Top-Tier Cleaning
                Products
              </li>
              <li style={styles.bulletItem}>
                <span style={styles.checkIcon}>✅</span> 100% Customer
                Satisfaction Guaranteed
              </li>
            </ul>
          </section>
        </div>

        {/* Call to Action */}
        <div style={styles.fullWidthSection}>
          <section style={styles.ctaSection}>
            <h2 style={styles.ctaTitle}>Ready for a Sparkling Home?</h2>
            <p style={styles.ctaText}>
              Contact us today to schedule your cleaning appointment!
            </p>
            <button
              style={styles.ctaButton}
              onClick={() => (window.location.href = "tel:+5038638041")}
            >
              Call Us Now! 📞
            </button>
          </section>
        </div>
      </main>
      <footer style={styles.footer}>
        <p>
          © {new Date().getFullYear()} Tarman Cleaning Services | Designed with ❤️ | Call:{" "}
          <a href="tel:+5038638041" style={styles.footerLink}>
            +1 503-863-0841
          </a>
        </p>
      </footer>
    </div>
  );
}

const styles = {
  pageContainer: {
    backgroundColor: "#ffe6f0",
    color: "#333",
    fontFamily: "'Roboto', sans-serif",
    margin: 0,
    width: "100%",
  },
  header: {
    backgroundColor: "#ff99cc",
    color: "#fff",
    padding: "40px 20px",
    textAlign: "center",
  },
  logoContainer: {
    marginBottom: "20px",
    textAlign: "center",
  },
  logo: {
    border: "4px solid #fff",
    borderRadius: "50%",
    height: "150px",
    objectFit: "cover",
    width: "150px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    margin: "10px 0",
  },
  subtitle: {
    fontSize: "1.2rem",
    fontStyle: "italic",
    marginTop: "10px",
  },
  fullWidthSection: {
    backgroundColor: "inherit",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  aboutSection: {
    padding: "40px 20px",
    textAlign: "center",
    maxWidth: "600px",
  },
  sectionTitle: {
    color: "#ff66b2",
    fontSize: "2rem",
    marginBottom: "20px",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    marginBottom: "20px",
  },
  bullets: {
    fontSize: "1rem",
    listStyleType: "none",
    margin: "0 auto",
    padding: 0,
    textAlign: "left",
    maxWidth: "400px",
  },
  bulletItem: {
    alignItems: "center",
    display: "flex",
    marginBottom: "10px",
  },
  checkIcon: {
    marginRight: "10px",
  },
  ctaSection: {
    backgroundColor: "#ffccdd",
    borderRadius: "10px",
    margin: "20px auto",
    padding: "40px 20px",
    textAlign: "center",
    maxWidth: "600px",
  },
  ctaTitle: {
    color: "#ff0066",
    fontSize: "1.8rem",
    marginBottom: "20px",
  },
  ctaText: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  ctaButton: {
    backgroundColor: "#ff0066",
    border: "none",
    borderRadius: "5px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    color: "#fff",
    cursor: "pointer",
    fontSize: "1rem",
    padding: "15px 30px",
  },
  footer: {
    backgroundColor: "#ff99cc",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
  },
  footerLink: {
    color: "#fff",
    textDecoration: "underline",
  },
};

export default App;
