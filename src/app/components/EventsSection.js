'use client';

export default function EventsSection() {
  const handleInquire = () => {
    alert('This is a demo. Event inquiries are for display only.');
  };

  return (
    <section id="events" className="section" style={{ background: '#fafafa' }}>
      <div className="container two-column">
        <div className="content">
          <h2>Weddings and Events</h2>
          <p>
            We host gatherings with a focus on privacy, flexibility, and a distinctly residential tone. 
            From rooftop celebrations to focused leadership retreats, each event is designed to feel like 
            a private world temporarily opened to invited guests.
          </p>
          <button onClick={handleInquire} className="btn btn-dark">INQUIRE NOW</button>
        </div>
        <img src="/assets/img/gallery/image-50.jpeg" alt="Event Space" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
      </div>
    </section>
  );
}
