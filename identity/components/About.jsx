// pages/About.jsx
import React from 'react';
import '../styles/about.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            Dismantling barriers to creative expression for people with disabilities
          </p>
        </div>
      </section>

      <section className="vision-mission">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-content">
              <h2 className="section-heading">Our Vision</h2>
              <p>
                "A world where people with disabilities thrive as celebrated artists and 
                storytellers, reshaping societal perceptions through inclusive arts and entertainment."
              </p>
            </div>
            <div className="mission-content">
              <h2 className="section-heading">Our Mission</h2>
              <p>
                "Empower people with disabilities through accessible programs, adaptive tools, 
                and partnerships, building confidence, community, and professional opportunities."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="problem-solution">
        <div className="container">
          <div className="problem-solution-content">
            <div className="problem">
              <h2 className="section-heading">The Challenge</h2>
              <p>People with disabilities are underrepresented in arts and entertainment due to:</p>
              <ul>
                <li>Physical, sensory, or cognitive barriers to creative spaces</li>
                <li>Lack of adaptive tools for artistic expression</li>
                <li>Limited platforms to showcase their talent and stories</li>
                <li>Societal stereotypes that undervalue their creative potential</li>
              </ul>
            </div>
            <div className="solution">
              <h2 className="section-heading">Our Approach</h2>
              <p>
                We dismantle barriers to creative expression by providing accessible platforms, 
                tools, and opportunities for people with disabilities to thrive as artists, 
                performers, and storytellers.
              </p>
              <p>
                Through our comprehensive programs, we address both the practical obstacles and 
                societal attitudes that limit artistic participation and recognition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-story">
        <div className="container">
          <h2 className="section-heading text-center">Our Story</h2>
          <div className="story-content">
            <div className="story-image">
              <div className="image-placeholder">
                <span>Founder's Photo</span>
              </div>
            </div>
            <div className="story-text">
              <p>
                ArtAbility began in 2020 when our founder, an artist with a disability, 
                experienced firsthand the lack of accessible creative spaces and opportunities. 
                What started as a small workshop series has grown into a comprehensive organization 
                dedicated to transforming the arts and entertainment landscape.
              </p>
              <p>
                Over the years, we've expanded our programs, built partnerships with major cultural 
                institutions, and helped launch the careers of dozens of talented artists with disabilities. 
                Our work has been recognized nationally for its innovation and impact.
              </p>
              <p>
                Today, we continue to grow our reach while remaining true to our founding vision: 
                a world where artistic talent is recognized and celebrated regardless of disability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-team">
        <div className="container">
          <h2 className="section-heading text-center">Our Team</h2>
          <div className="team-grid">
            {/* Team member cards with placeholders for images */}
            {[
              { name: "Jane Smith", role: "Executive Director", bio: "Jane has over 15 years of experience in arts administration and disability advocacy." },
              { name: "Michael Wong", role: "Program Director", bio: "Michael is a visual artist and educator specializing in accessible art education." },
              { name: "Sarah Johnson", role: "Adaptive Technology Specialist", bio: "Sarah develops custom tools that make artistic creation possible for people with various disabilities." },
              { name: "David Rodriguez", role: "Community Outreach", bio: "David builds partnerships with organizations to expand our reach and impact." }
            ].map((member, index) => (
              <div key={index} className="team-card card">
                <div className="team-image">
                  <div className="image-placeholder">
                    <span>Team Member Photo</span>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partners">
        <div className="container">
          <h2 className="section-heading text-center">Our Partners</h2>
          <p className="partners-intro">
            We collaborate with a diverse network of organizations committed to inclusive arts and accessibility.
          </p>
          <div className="partners-grid">
            {/* Partner logos placeholders */}
            {[1, 2, 3, 4, 5, 6].map((partner) => (
              <div key={partner} className="partner-logo">
                <div className="image-placeholder">
                  <span>Partner Logo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;