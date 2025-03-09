import React from 'react';
import { Link } from 'react-router-dom';
import './Programs.css';

function Programs() {
  const workshops = [
    {
      id: 1,
      title: "Introduction to Digital Art",
      description: "A beginner-friendly workshop on digital art creation with adaptive tools.",
      duration: "6 weeks",
      schedule: "Tuesdays, 4-6pm",
      instructor: "Alex Rivera",
      level: "Beginner"
    },
    {
      id: 2,
      title: "Advanced Painting Techniques",
      description: "Explore advanced painting methods adapted for various accessibility needs.",
      duration: "8 weeks",
      schedule: "Thursdays, 5-8pm",
      instructor: "Maria Santos",
      level: "Intermediate/Advanced"
    },
    {
      id: 3,
      title: "Sculpture Fundamentals",
      description: "Learn tactile sculpture techniques with adaptive tools and approaches.",
      duration: "6 weeks",
      schedule: "Saturdays, 10am-1pm",
      instructor: "David Chen",
      level: "All Levels"
    }
  ];

  return (
    <div className="programs-page">
      <section className="programs-hero">
        <div className="container">
          <h1 className="page-title">Our Programs</h1>
          <p className="page-subtitle">
            Discover our range of inclusive art programs designed to support 
            artists with disabilities at every stage of their creative journey.
          </p>
        </div>
      </section>

      <section className="programs-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2 className="section-heading">Inclusive Arts Education</h2>
              <p>
                Our programs are built on the foundation of universal design, ensuring that 
                artists of all abilities can participate fully. We provide:
              </p>
              <ul className="overview-list">
                <li>Personalized accommodations based on individual needs</li>
                <li>Adaptive art tools and accessible work spaces</li>
                <li>Multi-sensory teaching approaches</li>
                <li>Small class sizes for individualized attention</li>
                <li>Professional development opportunities</li>
              </ul>
              <p>
                All programs are led by experienced teaching artists who have expertise in 
                inclusive arts education and adaptive techniques.
              </p>
            </div>
            <div className="overview-image">
              <div className="image-placeholder">
                <span>Program Highlights Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="program-categories">
        <div className="container">
          <h2 className="section-heading text-center">Program Categories</h2>
          <div className="categories-grid">
            <div className="category-card card">
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3>Workshops & Classes</h3>
              <p>
                Hands-on learning experiences in a variety of artistic disciplines, 
                from painting and sculpture to digital art and photography.
              </p>
              <Link to="/programs/workshops" className="btn btn-sm">Learn More</Link>
            </div>
            
            <div className="category-card card">
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                </svg>
              </div>
              <h3>Mentorship Program</h3>
              <p>
                One-on-one guidance from established artists who provide personalized 
                support for artistic development and career advancement.
              </p>
              <Link to="/programs/mentorship" className="btn btn-sm">Learn More</Link>
            </div>
            
            <div className="category-card card">
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <h3>Exhibition Opportunities</h3>
              <p>
                Curated exhibitions that showcase the work of artists with disabilities 
                in prestigious galleries and public spaces.
              </p>
              <Link to="/programs/exhibitions" className="btn btn-sm">Learn More</Link>
            </div>
            
            <div className="category-card card">
              <div className="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 3a2.82 2.82 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                </svg>
              </div>
              <h3>Professional Development</h3>
              <p>
                Workshops and resources focused on career skills, including portfolio 
                development, grant writing, and entrepreneurship.
              </p>
              <Link to="/programs/professional" className="btn btn-sm">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="current-workshops">
        <div className="container">
          <h2 className="section-heading">Current Workshops</h2>
          <div className="workshops-grid">
            {workshops.map(workshop => (
              <div key={workshop.id} className="workshop-card card">
                <h3 className="workshop-title">{workshop.title}</h3>
                <p className="workshop-description">{workshop.description}</p>
                <div className="workshop-details">
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{workshop.duration}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Schedule:</span>
                    <span className="detail-value">{workshop.schedule}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Instructor:</span>
                    <span className="detail-value">{workshop.instructor}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Level:</span>
                    <span className="detail-value">{workshop.level}</span>
                  </div>
                </div>
                <Link to={`/programs/workshops/${workshop.id}`} className="btn">Register Now</Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/programs/workshops" className="btn btn-outline">View All Workshops</Link>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-heading text-center">Program Testimonials</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card card">
              <div className="testimonial-content">
                <p>
                  "The mentorship program completely transformed my approach to art. 
                  My mentor helped me develop techniques that work with my mobility limitations, 
                  and I've since had my work featured in two galleries!"
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <div className="image-placeholder small">
                    <span>Photo</span>
                  </div>
                </div>
                <div className="author-info">
                  <h4>Jessica T.</h4>
                  <p>Visual Artist, Mentorship Program</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card card">
              <div className="testimonial-content">
                <p>
                  "The adaptive tools workshop opened up a whole new world for me. 
                  I never thought I could paint again after my accident, but now I have 
                  a studio full of work and I'm preparing for my first solo exhibition."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <div className="image-placeholder small">
                    <span>Photo</span>
                  </div>
                </div>
                <div className="author-info">
                  <h4>Marcus L.</h4>
                  <p>Painter, Adaptive Tools Workshop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="apply-section">
        <div className="container text-center">
          <h2>Ready to Join Our Programs?</h2>
          <p>
            We welcome artists of all experience levels and provide accommodations 
            to ensure everyone can participate fully in our programs.
          </p>
          <div className="apply-buttons">
            <Link to="/apply" className="btn">Apply Now</Link>
            <Link to="/scholarships" className="btn btn-outline">Scholarship Information</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Programs;