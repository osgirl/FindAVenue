let React = require("react");
let VenueSearch = require("./VenueSearch");

// Setup Error Message
const ErrorMessage = (props) => {
  let theErrorMessage, theLoadingMessage;

  if (props.error) {
    theErrorMessage = <div className="venue--error-message">{props.error}</div>;
  }
  if (props.loading) {
    theLoadingMessage = <div className="venue--error-message message__loading"><span className="icon icon-spin5 animate-spin"></span><em>Loading</em></div>;
  }

  return (
    <div>
      <div>{theErrorMessage}</div>
      <div>{theLoadingMessage}</div>
    </div>
  );
};

// ES6 (statefull) Component
class MainContent extends React.Component {

  constructor(props) {
    super(props);
    this._onSubmit = this._onSubmit.bind(this);
    this._getLocation = this._getLocation.bind(this);
    this.state = {
      location_lat: null,
      location_long: null,
      venueData: null,
      errorMessage: null,
      loading: true
    };
  }

  _getLocation(location) {
    this.setState({ location_lat: location.coords.latitude });
    this.setState({ location_long: location.coords.longitude });
  }

  _onSubmit(e) {
    e.preventDefault();

    if (!this.state.location_lat) {
      navigator.geolocation.getCurrentPosition(this._getLocation);
    } else {
      
      // Now we have the lat and long, get the venue info

    }
  }

  render() {
    let theErrorMessage, LoadingMessage;

    // If there is data, display all the different parts.
    if (this.state.venueData) {
      const theVenueJson = this.state.venueData;
      const theVenueParse = JSON.parse(theVenueJson);
    }

    return (
      <div className="venue-view clearfix">
        
      <form action="#" method="GET" id="searchform" onSubmit={this._onSubmit}>
        <input type="text" name="query" id="query" value="Example: Coffee" />
        <input type="submit" name="submit" id="submit" value="Submit" />
      </form>
        
        <ErrorMessage error={this.state.errorMessage} loading={this.state.loading} />
  
      </div>
    );
  }

}

module.exports = MainContent;
