import React from "react";

// ES6 Stateless Component
const VenueResultItem = ({theData}) => (
 
  <div className="venue--single">
    <h2>
      <span> {theData.venue.name} {theData.venue.categories[0] && <img src={`${theData.venue.categories[0].icon.prefix}bg_32${theData.venue.categories[0].icon.suffix}`} alt="" />}</span> 
      {theData.venue.rating && <span className="rating">{theData.venue.rating}</span>}
    </h2>
    {theData.venue.location.address && <p className="subinfo">{theData.venue.location.address}</p>}

  </div>
 
);

module.exports = VenueResultItem;