import * as React from "react";
import {ReactElement} from "react";
import {Link} from "react-router-dom";
import {MapPage} from "./MapPage";

export class HomePage extends React.Component {
    render(): ReactElement<any> {
        return <div>
            <h2>Home Page</h2>

            <Link to="/map">Show account with amount >= 1000 on the map</Link>
        </div>
    }
}