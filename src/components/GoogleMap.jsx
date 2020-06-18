import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "../styles.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 28.397483,
      lng: 77.035774
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        className="container-fluid"
        style={{ height: "50vh", width: "100%", padding: "0px" }}
      >
        <GoogleMapReact
          yesIWantToUseGoogleMapApiInternals
          bootstrapURLKeys={{ key: "AIzaSyAbdWU7pYy1VG3cr7ZaOaknoeOo1aggxas " }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
