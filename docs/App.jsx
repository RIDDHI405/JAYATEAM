import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>TEAM JAYA</h1>
        <p>Plastic Roads & Drone Support for Farmers</p>
      </header>

      <section className="about">
        <h2>🌾 About Our Project</h2>
        <p>
          Team JAYA has developed this platform to help farmers and vendors
          connect directly with the government using modern technology like
          plastic roads and drones.
        </p>
      </section>

      <section className="contacts">
        <h2>📞 Important Contacts</h2>
        <p><strong>Team JAYA:</strong> 9479321801</p>
        <p><strong>PM Narendra Modi:</strong> 011-23012312</p>
        <p><strong>Dr. Manmohan Singh:</strong> 011-23014100</p>
      </section>

      <section className="form">
        <h2>📋 Farmer Help Form</h2>
        <form>
          <input type="text" placeholder="Farmer Name" required />
          <input type="text" placeholder="Address" required />
          <input type="tel" placeholder="Contact Number" required />
          <textarea placeholder="Describe Your Problem" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      <section className="form">
        <h2>🛣️ Road Request Form</h2>
        <form>
          <input type="text" placeholder="Farmer Name" required />
          <input type="text" placeholder="Field Area Type" required />
          <input type="text" placeholder="Field Length (meters)" required />
          <input type="text" placeholder="Required Road Duration" required />
          <button type="submit">Request Road</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2026 Team JAYA | Hackathon Project</p>
      </footer>
    </div>
  );
}

export default App;