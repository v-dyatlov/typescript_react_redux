import * as React from "react";
import {ReactElement} from "react";
import {Router, Route} from 'react-router-dom';
import {PrivateRoute} from "./PrivateRoute";

import {LoginPage} from "./LoginPage";
import {HomePage} from "./HomePage";
import {MapPage} from "./MapPage";
import {history} from "../history";


export class App extends React.Component {
    render(): ReactElement<any> {
        return <div>
            <Router history={history}>
                <div>
                    <PrivateRoute exact path="/" component={HomePage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/map" component={MapPage}/>
                </div>
            </Router>
        </div>
    }
}