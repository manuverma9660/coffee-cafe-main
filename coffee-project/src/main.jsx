import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";



const IMG = "https://themewagon.github.io/Koppee/img/";



const menuItems = [
  ["menu-1.jpg", "Black Coffee", "$5"],
  ["menu-2.jpg", "Chocolate Coffee", "$7"],
  ["menu-3.jpg", "Coffee With Milk", "$9"],
];

const services = [
  ["service-1.jpg", "Fastest Door Delivery", "🚚"],
  ["service-2.jpg", "Fresh Coffee Beans", "☕"],
  ["service-3.jpg", "Best Quality Coffee", "🏅"],
  ["service-4.jpg", "Online Table Booking", "▦"],
];

const testimonials = [
  ["testimonial-1.jpg", "Client Name", "Profession"],
  ["testimonial-2.jpg", "Client Name", "Profession"],
  ["testimonial-3.jpg", "Client Name", "Profession"],
];



function SectionTitle({ eyebrow, title }) {
  return (
    <div className="section-title">
      <span className="title-line"></span>
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
    </div>
  );
}



function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Service", "#service"],
    ["Menu", "#menu"],
    ["Pages", "#booking"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="brand">
        KOPPEE
      </a>

      <button
        className="mobile-btn"
        onClick={() => setOpen(!open)}
        aria-label="Open navigation menu"
      >
        ☰
      </button>

      <div className={`nav-links ${open ? "show" : ""}`}>
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            className={label === "Home" ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {label}
            {label === "Pages" && " ▾"}
          </a>
        ))}
      </div>
    </nav>
  );
}



function Hero() {
  const heroImage =
    "https://themewagon.github.io/Koppee/img/carousel-1.jpg";

  return (
    <header id="home" className="hero">
  
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url("${heroImage}")`,
        }}
      ></div>

      <Navbar />

    

      <div className="hero-content">
        <div className="hero-small">We Have Been Serving</div>

        <h1>COFFEE</h1>

        <div className="hero-since">* SINCE 1950 *</div>
      </div>

     
   
    </header>
  );
}



function About() {
  return (
    <section id="about" className="section about">
      <SectionTitle
        eyebrow="ABOUT US"
        title="Serving Since 1950"
      />

      <div className="about-grid">
        <div className="about-copy">
          <h3>Our Story</h3>

          <p className="lead">
            Eos kasd eos dolor vero vero, lorem stet diam rebum.
            Ipsum amet sed vero dolor sea
          </p>

          <p>
            Takimata sed vero vero no sit sed, justo clita duo no duo
            amet et, nonumy kasd sed dolor eos diam lorem eirmod.
            Amet sit amet amet no. Est nonumy sed labore eirmod sit
            magna. Erat at est justo sit ut. Labor diam sed ipsum et
            eirmod.
          </p>

          <a className="btn dark" href="#contact">
            Learn More
          </a>
        </div>

       
        <div className="about-image">
          <img
            src={`${IMG}about.png`}
            alt="Coffee cup"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        <div className="about-copy">
          <h3>Our Vision</h3>

          <p>
            Invidunt lorem justo sanctus clita. Erat lorem labore ea,
            justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd
            sit ea justo. Erat justo sed sed diam. Ea et erat ut sed
            diam sea ipsum est dolor.
          </p>

          <ul className="checks">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>

          <a className="btn gold" href="#contact">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}



function Services() {
  return (
    <section id="service" className="section services">
      <SectionTitle
        eyebrow="OUR SERVICES"
        title="Fresh & Organic Beans"
      />

      <div className="service-grid">
        {services.map(([image, title, icon]) => (
          <div className="service-item" key={title}>
            <img
              src={`${IMG}${image}`}
              alt={title}
            />

            <div>
              <h3>
                <span className="icon">{icon}</span>
                {title}
              </h3>

              <p>
                Sit lorem ipsum et diam elitr est dolor sed duo.
                Guberg sea et et lorem dolor sed est sit invidunt,
                dolore tempor diam ipsum takima erat tempor.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



function Promo() {
  const [email, setEmail] = useState("");

  const submitPromo = (e) => {
    e.preventDefault();

    alert("Thanks for subscribing!");

    setEmail("");
  };

  return (
    <section className="promo">
      <div className="promo-overlay">
        <h2>
          50% <span>OFF</span>
        </h2>

        <h3>Sunday Special Offer</h3>

        <p>
          Only for Sunday from 1st Jan to 30th Jan 2045
        </p>

        <form onSubmit={submitPromo}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            type="email"
            required
          />

          <button type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}



function MenuColumn({ title }) {
  return (
    <div className="menu-column">
      <h3>{title}</h3>

      {menuItems.map(([image, name, price]) => (
        <div
          className="menu-item"
          key={`${title}-${name}`}
        >
          <div className="menu-img-wrap">
            <img
              src={`${IMG}${image}`}
              alt={name}
            />

            <span>{price}</span>
          </div>

          <div>
            <h4>{name}</h4>

            <p>
              Sit lorem ipsum et diam elitr est dolor sed duo
              guberg sea et et lorem dolor.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}



function Menu() {
  return (
    <section id="menu" className="section menu-section">
      <SectionTitle
        eyebrow="MENU & PRICING"
        title="Competitive Pricing"
      />

      <div className="menu-grid">
        <MenuColumn title="Hot Coffee" />
        <MenuColumn title="Cold Coffee" />
      </div>
    </section>
  );
}



function Booking() {
  const [booked, setBooked] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();

    setBooked(true);
  };

  return (
    <section id="booking" className="booking-wrap">
      <div className="booking">
        <div className="booking-copy">
          <h2>
            30% <span>OFF</span>
          </h2>

          <h3>For Online Reservation</h3>

          <p>
            Lorem justo clita erat lorem labore ea, justo dolor
            lorem ipsum ut sed eos, ipsum et dolor kasd sit ea
            justo. Erat justo sed sed diam. Ea et erat ut sed
            diam sea.
          </p>

          <ul className="checks light">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>

        <form
          className="booking-form"
          onSubmit={handleBooking}
        >
          <h3>Book Your Table</h3>

          <input
            placeholder="Name"
            required
            type="text"
          />

          <input
            placeholder="Email"
            required
            type="email"
          />

          <input
            required
            type="date"
          />

          <input
            required
            type="time"
          />

          <select required defaultValue="">
            <option value="" disabled>
              Person
            </option>

            <option>1 Person</option>
            <option>2 People</option>
            <option>3 People</option>
            <option>4 People</option>
          </select>

          <button
            type="submit"
            className="btn gold full"
          >
            {booked ? "Booked ✓" : "Book Now"}
          </button>
        </form>
      </div>
    </section>
  );
}



function Testimonials() {
  const [index, setIndex] = useState(0);

  return (
    <section className="section testimonials">
      <SectionTitle
        eyebrow="TESTIMONIAL"
        title="Our Clients Say"
      />

      <div className="testimonial-grid">
        {testimonials.map(([image, name, job], i) => (
          <article
            className={`testimonial ${
              i === index ? "selected" : ""
            }`}
            key={image}
          >
            <div className="client">
              <img
                src={`${IMG}${image}`}
                alt={name}
              />

              <div>
                <h4>{name}</h4>
                <em>{job}</em>
              </div>
            </div>

            <p>
              Sed ea amet kasd elitr stet, stet rebum et ipsum
              est duo elitr eirmod clita lorem. Dolor tempor
              ipsum sanct clita.
            </p>
          </article>
        ))}
      </div>

      <div className="carousel-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}



function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e) => {
    e.preventDefault();

    alert("Subscribed!");

    setEmail("");
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-grid">
        <div>
          <h3>GET IN TOUCH</h3>

          <p>⌖ 123 Street, New York, USA</p>
          <p>☎ +012 345 67890</p>
          <p>✉ info@example.com</p>
        </div>

        <div>
          <h3>FOLLOW US</h3>

          <p>
            Amet elitr vero magna sed ipsum sit kasd sea elitr
            lorem rebum.
          </p>

          <div className="socials">
            <a href="#contact">♥</a>
            <a href="#contact">f</a>
            <a href="#contact">in</a>
            <a href="#contact">◎</a>
          </div>
        </div>

        <div>
          <h3>OPEN HOURS</h3>

          <p>
            <b>MONDAY - FRIDAY</b>
            <br />
            8.00 AM - 8.00 PM
          </p>

          <p>
            <b>SATURDAY - SUNDAY</b>
            <br />
            2.00 PM - 8.00 PM
          </p>
        </div>

        <div>
          <h3>NEWSLETTER</h3>

          <p>
            Amet elitr vero magna sed ipsum sit kasd sea elitr
            lorem rebum.
          </p>

          <form
            className="newsletter"
            onSubmit={handleNewsletter}
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              type="email"
              required
            />

            <button type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>

      <div className="copyright">
        Copyright © Domain. All Rights Reserved.
        <br />
        <span>Designed by HTML Codex</span>
      </div>
    </footer>
  );
}



function App() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Promo />
      <Menu />
      <Booking />
      <Testimonials />
      <Footer />

      <a
        className="back-top"
        href="#home"
        aria-label="Back to top"
      >
        ⌃
      </a>
    </>
  );
}



createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);