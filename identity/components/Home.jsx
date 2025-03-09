// pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Empowering Artists with Disabilities</h1>
            <p className="hero-subtitle">
              Building a world where people with disabilities thrive as celebrated artists and storytellers
            </p>
            <div className="hero-btns">
              <Link to="/gallery" className="btn">Explore Gallery</Link>
              <Link to="/programs" className="btn btn-outline">Our Programs</Link>
            </div>
          </div>
          <div className="hero-image">
            {/* Placeholder for hero image */}
            <div className="image-placeholder">
              <span>Featured Artist Showcase</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container text-center">
          <h2 className="section-heading">Our Mission</h2>
          <div className="mission-content">
            <p>
              "Empower people with disabilities through accessible programs, adaptive tools, 
              and partnerships, building confidence, community, and professional opportunities."
            </p>
          </div>
        </div>
      </section>

      <section className="what-we-do-section">
        <div className="container">
          <h2 className="section-heading text-center">What We Do</h2>
          <div className="services-grid">
            <div className="service-card card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12c0 5.5 4.5 10 10 10s10-4.5 10-10S17.5 2 12 2 2 6.5 2 12z"></path>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3>Accessible Creative Spaces</h3>
              <p>
                We create fully accessible studios and venues where artists can create, 
                perform, and exhibit without physical barriers.
              </p>
            </div>
            
            <div className="service-card card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </svg>
              </div>
              <h3>Adaptive Art Tools</h3>
              <p>
                We develop and provide specialized tools that allow artists to 
                express themselves regardless of physical, sensory, or cognitive limitations.
              </p>
            </div>
            
            <div className="service-card card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                </svg>
              </div>
              <h3>Professional Development</h3>
              <p>
                We offer workshops, mentorship, and career resources to help artists 
                with disabilities build sustainable careers in the arts and entertainment industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-artists">
        <div className="container">
          <h2 className="section-heading">Featured Artists</h2>
          <div className="artist-grid">
            {/* Artist cards with placeholders for images */}
            {[1, 2, 3, 4].map((artist) => (
              <div key={artist} className="artist-card card">
                <div className="artist-image">
                  <div className="image-placeholder">
                    <span>Artist Photo</span>
                  </div>
                </div>
                <div className="artist-info">
                  <h3>Artist Name</h3>
                  <p>Visual Artist | Painter</p>
                  <p className="artist-description">
                    Short artist bio and description of their work, highlighting their unique creative perspective.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "2rem" }}>
            <Link to="/gallery" className="btn">View All Artists</Link>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <div className="container">
          <h2 className="section-heading text-center">Our Impact</h2>
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Artists Supported</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Exhibitions Hosted</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Community Partners</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Workshop Attendees</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container text-center">
          <h2>Join Our Creative Community</h2>
          <p>
            Whether you're an artist, supporter, or partner organization, 
            there are many ways to get involved with our mission.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn">Contact Us</Link>
            <Link to="/programs" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;