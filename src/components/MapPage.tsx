import * as React from "react";
import {ReactElement} from "react";
import {ApplicationState} from "../redux";
import {connect} from "react-redux";
import {MapService} from "../redux/map/map.service";
import {Link} from "react-router-dom";

class MapPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        MapService.getAccounts(dispatch);
    }

    render(): ReactElement<any> {
        return <div>
            <Link to="/">Back</Link>
            <div id="map"></div>
        </div>
    }
}

function mapStateToProps(state: ApplicationState) {
    const {accounts} = state.map;
    return {
        accounts
    };
}

const connectedMapPage = connect(mapStateToProps)(MapPage);
export {connectedMapPage as MapPage}