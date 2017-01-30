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
    this.state = {
      venueData: null,
      errorMessage: null,
      loading: true
    };
  }

  componentWillMount() {
    const obj = this;

    // Ajax into the data, set as const
    const request = new XMLHttpRequest();
    request.open('GET', obj.props.apiSource, true);
    request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        // Success!
        obj.setState({
          venueData: this.response,
          loading: false
        });
      } else {
        // We reached our target server, but it returned an error
        obj.setState({
          errorMessage: "Error getting data"
        });
      }
    };
    request.onerror = function () {
      obj.setState({
        errorMessage: "Error connecting to Server"
      });
    };
    request.send();
  }

  render() {
    let nearestVenue, theErrorMessage, LoadingMessage;

    // If there is data, display all the different parts.
    if (this.state.venueData) {
      const theVenueJson = this.state.venueData;
      const theVenueParse = JSON.parse(theVenueJson);

      // Show Cheapest venue, for each flight
      nearestVenue = theVenueJson.map(function (element, index) {
        return (
          <EachVenueOption theData={element} />
        );
      });
    }

    return (
      <div className="venue-view clearfix">
        
        <VenueSearch />
        <ErrorMessage error={this.state.errorMessage} loading={this.state.loading} />
  
        <div className="nearest--venue clearfix">
          <h2><span>Nearest Venues</span></h2>
          <div>{nearestVenue}</div>
          <ErrorMessage loading={this.state.loading} />
        </div>
      </div>
    );
  }

}

module.exports = MainContent;
