
import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {

  return (
    <div className="showcase-section">
      <h1 className="showcase-title">
        Find your next <span className="highlight">Perfect</span>
        <br />
        place with ease
      </h1>
      <div className="showcase-description">
        Real Estate is the best place to find your next perfect place to live.
        <br />
        We have a wide range of properties for you to choose from.
      </div>
      <Link to={"/search"} className="cta-link">
        Let's get started...
      </Link>
    </div>
  );

}

export default Home