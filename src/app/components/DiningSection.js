'use client';

export default function DiningSection() {
  const handleLearnMore = () => {
    alert('This is a demo. Dining information is for display only.');
  };

  return (
    <section id="dining" className="section">
      <div className="container two-column">
        <img src="/assets/img/dining/image-4.jpeg" alt="Rooftop Dining" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
        <div className="content">
          <h2>Dining</h2>
          <p>
            Our rooftop dining unfolds within a secluded, garden-like setting where Mediterranean influences 
            meet seasonal ingredients and shared plates. We create an atmosphere that feels intimate and 
            immersive, offering elevated views without ever feeling exposed.
          </p>
          <button onClick={handleLearnMore} className="btn btn-dark">EXPLORE MENU</button>
        </div>
      </div>
    </section>
  );
}
