import React from 'react';

import aboutImg from '../images/hotel-inside.jpg';

export default function Home() {
  return (
    <div className="Home">
      <section className="about">
        <div className="img" style={{ backgroundImage: `url(${aboutImg})` }}></div>
        <div className="desc">
          <h2>Welcome</h2>
          <p>Hotel al-Qamar is a masterpiece with subtle traces of Arabian architecture. Featuring a striking entrance, high ceilings, landscaped gardens, and a range of well-crafted furnishings, the hotel is truly symbolic of the island lifestyle.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
    </div>
  )
}
