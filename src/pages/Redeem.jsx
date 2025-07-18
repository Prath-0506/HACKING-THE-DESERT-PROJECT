import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import heroVideo from "../assets/redeemvid.mp4"; // Use your own video

const Redeem = () => {
  // Points from different activities
  const [activityPoints, setActivityPoints] = useState({
    recycle: 40,
    foodShare: 30,
    carpool: 50,
    treePlant: 20,
  });

  const totalPoints = Object.values(activityPoints).reduce((sum, val) => sum + val, 0);

  const [redeemedItems, setRedeemedItems] = useState([]);

  const rewards = [
    { id: 1, name: "10% Off Eco Brand", points: 50 },
    { id: 2, name: "Reusable Eco Bag", points: 80 },
    { id: 3, name: "Plant a Tree", points: 100 },
    { id: 4, name: "Ecozone T-shirt", points: 150 },
  ];

  const handleRedeem = (reward) => {
    if (totalPoints >= reward.points) {
      setActivityPoints((prev) => {
        const updated = { ...prev };
        let remaining = reward.points;

        // Deduct proportionally from activities
        for (let key of Object.keys(updated)) {
          if (remaining === 0) break;
          const deduct = Math.min(updated[key], remaining);
          updated[key] -= deduct;
          remaining -= deduct;
        }

        return updated;
      });

      setRedeemedItems([...redeemedItems, reward.id]);
      alert(`🎉 Redeemed: ${reward.name}`);
    } else {
      alert("❌ Not enough EcoPoints to redeem this reward.");
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-text">
          <h1>Redeem Your EcoPoints</h1>
          <p>Exchange your green actions for real-world rewards 🌱</p>
        </div>
      </section>

      {/* Points Breakdown */}
      <div className="redeem-container">
        <h2>Your EcoPoints</h2>
        <ul className="points-list">
          {Object.entries(activityPoints).map(([key, val]) => (
            <li key={key}>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {val} pts
            </li>
          ))}
        </ul>
        <h3>Total Points: <span className="highlight">{totalPoints}</span></h3>

        {/* Rewards Section */}
        <div className="rewards-section">
          {rewards.map((reward) => (
            <div key={reward.id} className="reward-card">
              <h3>{reward.name}</h3>
              <p>Cost: {reward.points} pts</p>
              <button
                disabled={redeemedItems.includes(reward.id) || totalPoints < reward.points}
                onClick={() => handleRedeem(reward)}
              >
                {redeemedItems.includes(reward.id) ? "Redeemed ✅" : "Redeem"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Redeem;



