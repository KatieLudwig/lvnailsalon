import React from "react";
import './style.css';

const Home = () => (
    <div className='home-container'>
        <header className="hero">
        <h1>Welcome to LV Nails!</h1>
            <p>Your beauty is our duty!</p>
        </header>
        <section className="intro">
            <h2>About Us</h2>
            <p>At LV nails, we are commited to providing the best nail care services in town. Our experienced team is here to ensure you leave feeling pampered and beautiful.</p>
            <button>Discover More</button>
        </section>
    </div>
);

export default Home;