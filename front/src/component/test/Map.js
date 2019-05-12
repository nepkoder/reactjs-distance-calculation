import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker} from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';

Geocode.setApiKey("AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0");
Geocode.enableDebug();

//AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0

class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mapPosition: {
                lat: this.props.center.lat,
                lng: this.props.center.lng
            },
            markerPosition: {
                lat: this.props.center.lat,
                lng: this.props.center.lng
            }
        }
    }


    /**
     * When the user types an address in the search box
     * @param place
     */
    onPlaceSelected = (place) => {
        console.log('plc', place);
        const latValue = place.geometry.location.lat(),
            lngValue = place.geometry.location.lng();
        // Set these values in the state.
        this.setState({
            markerPosition: {
                lat: latValue,
                lng: lngValue
            },
            mapPosition: {
                lat: latValue,
                lng: lngValue
            },
        })
    };


    render() {
        const AsyncMap = withScriptjs(
            withGoogleMap(
                props => (
                    <GoogleMap google={this.props.google}
                               defaultZoom={this.props.zoom}
                               defaultCenter={{lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng}}
                    >

                        {/* For Auto complete Search Box */}
                        <Autocomplete
                            style={{
                                width: '100%',
                                height: '40px',
                                paddingLeft: '16px',
                                marginTop: '2px',
                                marginBottom: '100px'
                            }}
                            onPlaceSelected={this.onPlaceSelected}
                            types={['(regions)']}
                        />

                    </GoogleMap>
                )
            )
        );
        let map;
        if (this.props.center.lat !== undefined) {
            map = <div>
                <AsyncMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0&libraries=places"
                    loadingElement={
                        <div style={{height: `100%`}}/>
                    }
                    containerElement={
                        <div style={{height: this.props.height}}/>
                    }
                    mapElement={
                        <div style={{height: `100%`}}/>
                    }
                />
            </div>
        } else {
            map = <div style={{height: this.props.height}}/>
        }
        return (map)
    }
}

export default Map