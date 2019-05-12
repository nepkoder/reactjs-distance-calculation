import React from 'react';
import './App.css';
import Home from "./component/home";
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import mapDetails from "./component/mapDetails";
import test from "./component/test";
import {GoogleMap, withScriptjs} from "react-google-maps";

// AIzaSyDbJSDVBcei5G-ev9Bgbv1XbZ584BUMq9w

function App() {

    const MapLoader = withScriptjs(mapDetails);
    return (<div>
            {/*<MapLoader*/}
            {/*googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDurZQBXjtSzKeieXwtFeGe-jhZu-HEGQU"*/}
            {/*loadingElement={<div style={{ height: `100%` }} />}*/}
            {/*/>*/}

            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route exact={true} path="/map" component={mapDetails}/>
                </Switch>
            </BrowserRouter>
        </div>

    );
}

export default App;
