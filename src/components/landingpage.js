import React, { useState } from 'react';
import '../styles/landingpage.css';

function LandingPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className="landing-container">
      <h1 className="landing-title">I Create User-friendly Websites</h1>
      <p className="landing-subtitle">
        All these projects were completed on time and delivered to the customer.
      </p>
      <button className="landing-button">
        Take a look
      </button>

      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default LandingPage;
