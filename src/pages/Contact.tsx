import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">

      {/* Background Glow */}
      <div className="contact-bg"></div>

      <div className="contact-container">

        {/* Left Info */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1>Contact Us</h1>
          <p>
            Have questions about your health journey? 
            Our team is here to guide you with precision care.
          </p>

          <div className="info-box">
            <span>Email</span>
            <p>support@vitalityx.com</p>
          </div>

          <div className="info-box">
            <span>Phone</span>
            <p>+91 98765 43210</p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Your Message" rows="5"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}