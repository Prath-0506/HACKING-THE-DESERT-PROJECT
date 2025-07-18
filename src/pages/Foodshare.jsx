import React, { useState } from 'react';
import './Foodshare.css';
import shareVideo from "../assets/share-video.mp4";

const Foodshare = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    name: "",
    location: "",
    food: "",
    quantity: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, form]);
    setForm({ name: "", location: "", food: "", quantity: "" });
  };

  return (
    <>
      {}
      <section className="hero">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={shareVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <h1>Community Food & Item Sharing</h1>
          <p>Connect with people around you. Share what you can. Receive what you need.</p>
        </div>
      </section>

      {}
      <section className="form-section">
        <h2>List Items to Share</h2>
        <form onSubmit={handleSubmit} className="share-form">
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              placeholder="City / Area"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Item to Share</label>
            <input
              type="text"
              placeholder="E.g., Cooked rice, Canned food"
              value={form.food}
              onChange={(e) => setForm({ ...form, food: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              type="text"
              placeholder="E.g., 2 plates, 3 packs"
              value={form.quantity}
              onChange={(e) => setForm({ ...form, quantity: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </section>

      {}
      <section className="listing-section">
        <h2>Available Shared Items</h2>
        {items.length === 0 ? (
          <p className="empty-msg">No items listed yet. Be the first to contribute!</p>
        ) : (
          <div className="item-grid">
            {items.map((item, index) => (
              <div key={index} className="item-card">
                <h3>{item.food}</h3>
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <p><strong>Location:</strong> {item.location}</p>
                <p><strong>By:</strong> {item.name}</p>
                <button className="request-btn">Request</button>
              </div>
            ))}
          </div>
        )}
      </section>
      {}
<section className="receive-section">
  <h2>How to Receive Shared Items</h2>
  <div className="receive-info">
    <p>Browse the list of shared food and items available in your locality. If you find something useful, simply click on the <strong>"Request"</strong> button. Your request will be sent to the person who shared it, and they will connect with you for handover.</p>
    <ul>
      <li>View what's available based on your location.</li>
      <li>Click "Request" to express interest.</li>
      <li>The sharer will contact you or vice versa to schedule pickup.</li>
      <li>Please be polite and prompt during communication.</li>
    </ul>
    <p className="note">Note: All exchanges are done at mutual convenience. No money should be involved.</p>
  </div>
</section>


      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Ecozone. Empowering communities through sharing.</p>
      </footer>
    </>
  );
};

export default Foodshare;


