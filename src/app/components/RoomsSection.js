'use client';

const rooms = [
  {
    name: 'Grand Belle Bleue',
    description: '550 sq ft with marble detailing, fireplace, and curated artwork. French doors open to stunning city views.',
    image: '/assets/img/rooms-and-suites/image-2.jpeg'
  },
  {
    name: 'Demi Suite',
    description: '350 sq ft private retreat with queen bed, writing desk, and glowing fireplace. Perfect for intimate stays.',
    image: '/assets/img/rooms-and-suites/image-3.jpeg'
  },
  {
    name: 'Grand Belle Terrace',
    description: '550 sq ft art-forward suite with private terrace and outdoor fireplace. Designed by Dana Hollister.',
    image: '/assets/img/rooms-and-suites/image-4.jpeg'
  }
];

export default function RoomsSection() {
  const handleBookNow = () => {
    alert('This is a demo. Booking functionality is not available.');
  };

  return (
    <section id="rooms" className="section">
      <div className="container">
        <h2 className="section-title">Featured Rooms & Suites</h2>
        <div className="rooms-grid">
          {rooms.map((room, index) => (
            <div key={index} className="room-card">
              <img src={room.image} alt={room.name} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <h3>{room.name}</h3>
              <p>{room.description}</p>
              <div style={{ margin: '0 20px 20px 20px' }}>
                <button onClick={handleBookNow} className="btn btn-dark">VIEW DETAILS</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
