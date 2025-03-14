// pages/About.jsx
import React from 'react';
import '../styles/about.css';
import kevin from '../images/kevin pics.jpg';
import nikita from '../images/nikita.jpg';
// import sarah from '../images/sarah.jpg';
// import david from '../images/david.jpg';

function About() {
  // Team members data
  const teamMembers = [
    { 
      name: "Manzi Kevin", 
      role: "Executive Director",
      image: kevin,
      bio: "Kevin leads our organization with passion and vision."
    },
    { 
      name: "Akimana Nikita", 
      role: "Communications officer", 
      image:nikita,
      bio: "Nikita helps in reaching out to potential partners and people with disability"
    },
    // { 
    //   name: "", 
    //   role: "Adaptive Technology Specialist", 
    //   // image: sarah, // Uncomment when you have the image
    //   bio: "Sarah develops custom tools that make artistic creation possible for people with various disabilities."
    // },
    // { 
    //   name: "David Rodriguez", 
    //   role: "Community Outreach", 
    //   // image: david, // Uncomment when you have the image
    //   bio: "David builds partnerships with organizations to expand our reach and impact."
    // }
  ];

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
                <img src={kevin} alt="Founder" />
              </div>
            </div>
            <div className="story-text">
              <p>
                Identity began in 2024 when our founder, a young boy without disability, 
                experienced firsthand the lack of accessible creative spaces and opportunities for people with disability. 
                What started as a small workshop series has grown into a comprehensive organization 
                dedicated to transforming the arts and entertainment landscape.
              </p>
              <p>
                Over the months, we've expanded our programs, visited centers having people with such disability 
                and encouraged most of them to start careers as talented artists with disabilities. 
                Our work has been recognized on district-level for its innovation and impact.
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
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card card">
                <div className="team-image">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={`${member.name} - ${member.role}`} 
                      className="team-member-img"
                    />
                  ) : (
                    <div className="image-placeholder">
                      <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                  )}
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
            We shall be collaborating with a diverse network of organizations committed to inclusive arts and accessibility.
          </p>
          <h3>COMING SOON ...</h3>
          {/* <div className="partners-grid"> */}
            {/* Partner logos placeholders */}
            {/* {[1, 2, 3, 4, 5, 6].map((partner) => (
              <div key={partner} className="partner-logo">
                <div className="image-placeholder">
                  <span>Partner Logo</span>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default About;