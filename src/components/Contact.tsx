import { ArrowRight, ArrowUpRight, Linkedin, Mail } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "pratikshasingh.co.in@gmail.com",
    href: "mailto:pratikshasingh.co.in@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/pratiksha-singh-6769a5431/",
    icon: Linkedin,
  },
];

function Contact() {
  return (
    <>
      <section className="section section-contact" id="contact">
        <div className="page-shell contact-shell">
          <div className="contact-heading">
            <span className="section-kicker">04 / Contact</span>
            <h2>
              Let&apos;s start
              <br />
              <span>a conversation.</span>
            </h2>
            <p>
              Open to connecting, sharing ideas and learning about new
              opportunities.
            </p>
            <a className="button button-light" href="mailto:pratikshasingh.co.in@gmail.com">
              Get in touch <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="contact-links">
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <a
                className="contact-link-card"
                href={href}
                key={label}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noreferrer"}
              >
                <span className="contact-link-icon">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <span className="contact-link-copy">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </span>
                <ArrowUpRight
                  className="contact-arrow"
                  size={17}
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <a className="wordmark footer-wordmark" href="#home">
            PS<span>.</span>
          </a>
          <a className="back-to-top" href="#home">
            Back to top <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Contact;
