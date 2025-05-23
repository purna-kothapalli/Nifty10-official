import React from 'react';
import './About.css';
import rocketGif from '../../assets/rocket.gif';
import visionGif from '../../assets/vision.gif';

const About = () => {
  return (
    <>
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Your vision, our innovation — crafting digital success together.</p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="about-content container">
        <div className="card">
          <h2>About Company</h2>
          <p>
            We breathe life into ideas and concepts through our meticulous product development process.
            Our team of skilled developers, designers, and engineers collaborates seamlessly to transform
            visions into robust and scalable software products. With a relentless pursuit of quality and
            efficiency, we ensure that our team develops not just a product, but a technological masterpiece.
          </p>
        </div>

        <div className="card">
          <img src={rocketGif} alt="Rocket" className="card-icon" />
          <h2>Mission</h2>
          <p>
            Our mission is not just to meet expectations but to exceed them. We embrace challenges as
            opportunities for growth, and our commitment to excellence is evident in every line of code
            we write and every pixel we design.
          </p>
        </div>

        <div className="card">
          <img src={visionGif} alt="Vision" className="card-icon" />
          <h2>Vision</h2>
          <p>
            We envision a future where innovation meets execution. We strive to be a trusted partner in
            digital transformation, delivering value through creativity, technology, and strategic thinking.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Nifty10?</h2>
          <div className="reasons">
            <div className="reason-card">
              <img src="https://img.icons8.com/color/96/checked--v1.png" alt="Expert Team" />
              <h3>Expert Team</h3>
              <p>Our experienced professionals ensure high-quality delivery with innovative thinking.</p>
            </div>
            <div className="reason-card">
              <img src="https://img.icons8.com/color/96/fast.png" alt="Fast Delivery" />
              <h3>Agile & Fast</h3>
              <p>We follow agile methodologies to deliver scalable and timely solutions.</p>
            </div>
            <div className="reason-card">
              <img src="https://img.icons8.com/color/96/customer-support.png" alt="Support" />
              <h3>24/7 Support</h3>
              <p>We stand by your side round the clock to provide support and assistance.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
