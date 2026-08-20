import { useState } from "react";
import heroImg from "./assets/hero.jpg";
import "./App.css";

function App() {
    const slides = [
        {
            image: "https://themewagon.github.io/Koppee/img/carousel-1.jpg",
            small: "We Have Been Serving",
            title: "COFFEE",
            since: "* SINCE 1950 *",
        },
        {
            image: "https://themewagon.github.io/Koppee/img/carousel-2.jpg",
            small: "We Have Been Serving",
            title: "COFFEE",
            since: "* SINCE 1950 *",
        },
        {
            image: "https://themewagon.github.io/Koppee/img/carousel-3.jpg",
            small: "We Have Been Serving",
            title: "COFFEE",
            since: "* SINCE 1950 *",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prev) => (prev - 1 + slides.length) % slides.length
        );
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <main>
            <nav className="navbar">
                <div className="brand">KOPPEE</div>

                <div className="nav-links">
                    <a href="#" className="active">Home</a>
                    <a href="#about">About</a>
                    <a href="#service">Service</a>
                    <a href="#menu">Menu</a>
                    <a href="#pages">Pages</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            <section className="hero">

                <div
                    className="hero-bg"
                    style={{
                        backgroundImage: `url("${slides[currentSlide].image}")`,
                    }}
                ></div>

             

              
                <div className="hero-content">
                    <div className="hero-small">
                        {slides[currentSlide].small}
                    </div>

                    <h1>{slides[currentSlide].title}</h1>

                    <div className="hero-since">
                        {slides[currentSlide].since}
                    </div>
                </div>

               
                <button
                    className="slider-arrow right"
                    onClick={nextSlide}
                    aria-label="Next slide"
                >
                    ›
                </button>

                {/* DOTS */}
                <div className="hero-dots">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${
                                currentSlide === index ? "active" : ""
                            }`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        ></button>
                    ))}
                </div>

            </section>
        </main>
    );
}

export default App;