import React from 'react';
import {Link} from 'react-router-dom';

import aboutImg from '../images/hotel-inside.jpg';
import stayImg from '../images/stay.jpg';
import dineImg from '../images/dine.jpg';
import eventsImg from '../images/events.jpg';

export default function Home() {
  return (
    <div className="Home">
      <section className="about">
        <div className="img" style={{ backgroundImage: `url(${aboutImg})` }}></div>
        <div className="desc">
          <h2>Welcome</h2>
          <p>Hotel al-Qamar is a masterpiece with subtle traces of Arabian architecture, featuring a striking entrance, high ceilings, landscaped gardens, and a range of well-crafted furnishings. The hotel is attuned to the surrounding environment through a thoughtful design that respects the rich artistry and cultural heritage. It is truly symbolic of the island lifestyle.</p>
        </div>
      </section>
      <section className="highlights">
        <div className="desc">
          <h2>Highlights</h2>
        </div>
        <div className="stay">
          <img src={stayImg} alt="inside one of the bedrooms in the hotel"/>
          <h3>Stay</h3>
          <p>Each of the hotel’s 80 hotel rooms and suites reflects the true essence of the Arabian island. Sitback and relax whilst appreciating the magical view that nature has to offer.</p>
          <Link to="/rooms" className="btn-grey">View More</Link>
        </div>
        <div className="dine">
          <img src={dineImg} alt="inside one of the restaurants in the hotel"/>
          <h3>Dine</h3>
          <p>Enjoy our dining venues which are designed to provide an exquisite fine dining experience. We have three delightfully contrasting restaurants and bars that grace the hotel.</p>
          <Link to="/dining" className="btn-grey">View More</Link>
        </div>
        <div className="events">
          <img src={eventsImg} alt="people celebrating"/>
          <h3>Events</h3>
          <p>From weddings to elegant private dinners and from large-scale conferences to discreet business meetings, the hotel makes a stunning location for all your events.</p>
          <Link to="/events" className="btn-grey">View More</Link>
        </div>
      </section>
    </div>
  )
}
