import { Link } from "react-router-dom";
import "./Footer.css";

const footerLinks = {
  Company: [
    { label: "Why VitalityX", href: "/why-us" },
    { label: "Contact", href: "/contact" },
    { label: "Affiliate Program", href: "/affiliate" },
  ],
  Programs: [
    { label: "Wellness Programs", href: "/programs" },
    { label: "Sleep Performance", href: "/programs#sleep" },
    { label: "Mental Performance", href: "/programs#mental" },
    { label: "Services", href: "/services" },
  ],
  Shop: [
    { label: "Supplements", href: "/supplements" },
    { label: "Equipment", href: "/equipment" },
    { label: "Gear", href: "/gear" },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="brand">
            <div className="logo-box">VX</div>
            <span>VitalityX</span>
          </Link>

          <p>
            Personalized healthcare powered by genetics, nutrition 
            and performance science.
          </p>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="footer-column">
            <h4>{title}</h4>

            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} VitalityX. All rights reserved.</p>

        <div className="footer-legal">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>

    </footer>
  );
}