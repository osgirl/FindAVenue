import React from "react";

// ES6 Stateless Component
const VenueResultItem = ({theData}) => (
 
  <div class="venue--single">
    <h2><span> {theData.venue.name} </span></h2>
  </div>
 
);

module.exports = VenueResultItem;