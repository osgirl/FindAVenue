import React from "react";

// ES6 Stateless Component
const VenueResultItem = ({theData}) => (
 
  <li className="venue--results venue--results-single">
    <h2>
      <span> {theData.venue.name} {theData.venue.categories[0] && <img src={`${theData.venue.categories[0].icon.prefix}bg_32${theData.venue.categories[0].icon.suffix}`} alt="" />}</span> 
      {theData.venue.rating && <span className="rating">{theData.venue.rating}</span>}
    </h2>
    {theData.venue.location.address && <p className="subinfo">{`${theData.venue.location.address}, ${theData.venue.location.city}`}</p>}

  </li>
 
);

module.exports = VenueResultItem;