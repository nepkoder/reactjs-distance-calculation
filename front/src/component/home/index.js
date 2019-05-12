import React, {Component} from "react";
import "./home.css"

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fromLat: "",
            fromLon: "",
            toLat: "",
            toLon: "",
            distance: ""
        };

        this.handleFromLat = this.handleFromLat.bind(this);
        this.handleFromLon = this.handleFromLon.bind(this);
        this.handleToLat = this.handleToLat.bind(this);
        this.handleToLon = this.handleToLon.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    render() {
        return <form className="city-wp">
            <div className="group">
                <input type="text" required={true}
                       placeholder="From Latitude"
                       value={this.state.fromLat}
                       onChange={this.handleFromLat}/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;From Latitude</label>
            </div>

            <div className="group">
                <input type="text" required={true}
                       placeholder="From Longitude"
                       value={this.state.fromLon}
                       onChange={this.handleFromLon}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;From Longitude</label>
            </div>

            <div className="group">
                <input type="text" required={true}
                       placeholder="To Latitude"
                       value={this.state.toLat}
                       onChange={this.handleToLat}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;To Latitude</label>
            </div>

            <div className="group">
                <input type="text" required={true}
                       placeholder="To Longitude"
                       value={this.state.toLon}
                       onChange={this.handleToLon}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;To Longitude</label>
            </div>



            <button onClick={this.handleSubmit} className="ripple" type="button" name="">Calculate</button>
            <br/>
            <div>
                Distance is: {this.state.distance}
            </div>

        </form>
    }

    handleFromLat(event) {
        this.setState({fromLat: event.target.value});
    }


    handleFromLon(event) {
        this.setState({fromLon: event.target.value});
    }

    handleToLat(event) {
        this.setState({toLat: event.target.value});
    }


    handleToLon(event) {
        this.setState({toLon: event.target.value});
    }


    handleSubmit() {
        const fromObj = {
            lat: this.state.fromLat,
            lon: this.state.fromLon
        }
        const toObj = {
            lat: this.state.toLat,
            lon: this.state.toLon
        }

        const data = {
            from: fromObj,
            to: toObj
        };

        const url = 'http://localhost:5000/distance/';

        fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
            },
            body: JSON.stringify(data || '')
        })
            .then(response => {
                response.json().then(body => {
                    this.setState({
                        distance: body.distance
                    });
                    console.log(body.distance);
                });
            });

    }

}

export default Home;
