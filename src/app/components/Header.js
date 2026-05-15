'use client';

export default function Header() {
  const handleBookNow = () => {
    alert('This is a demo. Booking functionality is not available.');
  };

  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">LUXURY HOTEL</a>
        <nav className="nav-links">
          <a href="#rooms">Rooms</a>
          <a href="#offers">Offers</a>
          <a href="#dining">Dining</a>
          <a href="#events">Events</a>
          <a href="#location">Location</a>
          <button onClick={handleBookNow} className="book-btn">BOOK NOW</button>
        </nav>
      </div>
    </header>
  );
}
