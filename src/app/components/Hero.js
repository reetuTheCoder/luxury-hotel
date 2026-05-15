'use client';

export default function Hero() {
  const handleBookNow = () => {
    alert('This is a demo. Booking functionality is not available.');
  };

  return (
    <section className="hero" style={{
      backgroundImage: "url('/assets/img/home/image-10.jpeg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="hero-content">
        <h1>IT'S A PLEASURE DOING<br />PLEASURE WITH YOU</h1>
        <p>Experience West Hollywood's most secluded luxury retreat</p>
        <button onClick={handleBookNow} className="btn">MAKE A RESERVATION</button>
      </div>
    </section>
  );
}
