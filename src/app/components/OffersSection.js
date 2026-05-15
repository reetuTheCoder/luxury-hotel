'use client';

const offers = [
  {
    title: 'Extend Your Pleasure',
    description: 'Preferred rates on stays of three nights or more. Take time to settle into the suite and rooftop.',
    image: '/assets/img/offers/image-3.jpeg'
  },
  {
    title: 'Plan Ahead',
    description: 'Book early and receive exclusive rates on your stay. Perfect for those who like to anticipate pleasure.',
    image: '/assets/img/offers/image-2.jpeg'
  }
];

export default function OffersSection() {
  const handleBookNow = () => {
    alert('This is a demo. Booking functionality is not available.');
  };

  return (
    <section id="offers" className="section" style={{ background: '#fafafa' }}>
      <div className="container">
        <h2 className="section-title">Featured Offers</h2>
        <div className="offers-grid">
          {offers.map((offer, index) => (
            <div key={index} className="offer-card">
              <img src={offer.image} alt={offer.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <div style={{ margin: '0 20px 20px 20px' }}>
                <button onClick={handleBookNow} className="btn btn-dark">LEARN MORE</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
