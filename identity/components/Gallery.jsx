// pages/Gallery.jsx
import React, { useState } from 'react';
import '../styles/gallery.css';

function Gallery() {
  const [filter, setFilter] = useState('all');
  
  // Sample artwork data
  const artworks = [
    { id: 1, title: "Colorful Dreams", artist: "Maria Santos", medium: "Painting", category: "visual" },
    { id: 2, title: "Sound of Silence", artist: "John Chen", medium: "Digital Art", category: "digital" },
    { id: 3, title: "Texture of Life", artist: "Aisha Johnson", medium: "Sculpture", category: "sculpture" },
    { id: 4, title: "Ocean Whispers", artist: "David Kim", medium: "Painting", category: "visual" },
    { id: 5, title: "Urban Rhythms", artist: "Sofia Rodriguez", medium: "Photography", category: "photography" },
    { id: 6, title: "Digital Landscapes", artist: "Marcus Lee", medium: "Digital Art", category: "digital" },
    { id: 7, title: "Tactile Emotions", artist: "Emma Wilson", medium: "Sculpture", category: "sculpture" },
    { id: 8, title: "City Lights", artist: "James Taylor", medium: "Photography", category: "photography" },
    { id: 9, title: "Abstract Thoughts", artist: "Olivia Brown", medium: "Painting", category: "visual" },
    { id: 10, title: "Virtual Reality", artist: "Raj Patel", medium: "Digital Art", category: "digital" },
    { id: 11, title: "Nature's Touch", artist: "Sarah Johnson", medium: "Sculpture", category: "sculpture" },
    { id: 12, title: "Street Stories", artist: "Miguel Sanchez", medium: "Photography", category: "photography" },
  ];
  
  const filteredArtworks = filter === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === filter);
  
  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <h1 className="page-title">Artist Gallery</h1>
          <p className="page-subtitle">
            Showcasing the extraordinary talent and diverse perspectives of artists with disabilities
          </p>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          <div className="gallery-filters">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
              onClick={() => setFilter('all')}
            >
              All Works
            </button>
            <button 
              className={`filter-btn ${filter === 'visual' ? 'active' : ''}`} 
              onClick={() => setFilter('visual')}
            >
              Paintings
            </button>
            <button 
              className={`filter-btn ${filter === 'digital' ? 'active' : ''}`} 
              onClick={() => setFilter('digital')}
            >
              Digital Art
            </button>
            <button 
              className={`filter-btn ${filter === 'sculpture' ? 'active' : ''}`} 
              onClick={() => setFilter('sculpture')}
            >
              Sculpture
            </button>
            <button 
              className={`filter-btn ${filter === 'photography' ? 'active' : ''}`} 
              onClick={() => setFilter('photography')}
            >
              Photography
            </button>
          </div>

          <div className="artwork-grid">
            {filteredArtworks.map((artwork) => (
              <div key={artwork.id} className="artwork-card card">
                <div className="artwork-image">
                  <div className="image-placeholder">
                    <span>Artwork Image</span>
                  </div>
                </div>
                <div className="artwork-info">
                  <h3>{artwork.title}</h3>
                  <p className="artist-name">By {artwork.artist}</p>
                  <p className="artwork-medium">{artwork.medium}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-artist-spotlight">
        <div className="container">
          <h2 className="section-heading">Featured Artist Spotlight</h2>
          <div className="spotlight-content">
            <div className="spotlight-image">
              <div className="image-placeholder">
                <span>Artist Portrait</span>
              </div>
            </div>
            <div className="spotlight-info">
              <h3>Maria Santos</h3>
              <p className="artist-medium">Visual Artist | Painter</p>
              <p className="artist-bio">
                Maria Santos is a visual artist who explores themes of identity and perception 
                through vibrant, expressive paintings. Born with cerebral palsy, Maria has 
                developed unique techniques that allow her to create intricate brushwork and 
                textures that have become her signature style.
              </p>
              <p>
                "Art gave me a voice when I felt I had none. Through my paintings, I can 
                share how I see the world – not defined by disability, but enriched by my 
                unique perspective."
              </p>
              <p>
                Maria's work has been exhibited in galleries across the country and featured 
                in several publications focused on contemporary art. She also leads workshops 
                for aspiring artists with disabilities, sharing her techniques and passion for 
                creative expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="exhibition-calendar">
        <div className="container">
          <h2 className="section-heading text-center">Upcoming Exhibitions</h2>
          <div className="calendar-grid">
            {[
              { date: "April 15-30, 2025", title: "Perspectives: New Voices in Art", location: "City Gallery", description: "A group exhibition featuring works by emerging artists with disabilities." },
              { date: "May 10-20, 2025", title: "Digital Frontiers", location: "Tech Arts Center", description: "Showcasing innovative digital art created with adaptive technologies." },
              { date: "June 5-25, 2025", title: "Tactile Expressions", location: "Modern Art Museum", description: "An immersive exhibition of sculptural works that engage multiple senses." }
            ].map((event, index) => (
              <div key={index} className="event-card card">
                <div className="event-date">{event.date}</div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-location">{event.location}</p>
                <p className="event-description">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="submission-cta">
        <div className="container text-center">
          <h2>Are You An Artist?</h2>
          <p>
            We're always looking to showcase new talent and diverse perspectives. 
            If you're an artist with a disability, we'd love to feature your work.
          </p>
          <button className="btn">Submit Your Work</button>
        </div>
      </section>
    </div>
  );
}

export default Gallery;