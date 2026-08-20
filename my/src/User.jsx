import "./User.css";

function User()
{
    return(
        <div>
            <nav className='navbar'>
                <h2 className='logo'>
                    My Website
                </h2>
                <ul className='menu'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>

            </nav>
            <section className='hero'>
                <div className='hero-text'>
                    <h1>
                        Welcome To My Website
                    </h1>
                    <p>
                        This is a responsive React JS website
                    </p>
                    <button>
                        Get Started
                    </button>
                </div>
            </section>
            <section className='cards'>
                <div className='card'>
                    <h2>Web Design</h2>
                    <p>
                        Modern website design using React Js
                    </p>
                </div>
                    <div className='card'>
                        <h2>
                            Responsive
                        </h2>
                        <p>
                            Mobile tablet and desktop friendly.
                        </p>
                    </div>
                    <div>
                        <h2>Fast</h2>
                        <p>
                            Fast and smooth website performance.
                        </p>
                    </div>
            </section>
            <footer className='footer'>
                <p>
                 &copy; 2026 My Website
                </p>

            </footer>
        </div>
    )
}

export default User;