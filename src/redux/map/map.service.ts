import {mapRequest, mapSuccess} from "./map.actions";
import {Dispatch} from "react-redux";
import * as openSocket from "socket.io-client";
import Map = google.maps.Map;
import {Account} from './map.types';

const  socket = openSocket('http://localhost:3000');

export const MapService = {
    initMap,
    getAccounts,
    addMarker
};

function initMap() {
    //get coordinates for first object and init a map
    // const firstObj = accounts[0];
    // const coordinates = this.getCoordinates(firstObj.address);
    let map = null;
    // if (coordinates) {
    const mapOptions = {
        zoom: 6,
        center: {lat: 52.784391, lng: 9.188200},
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // }

    return map;
}

function getAccounts(dispatch: Dispatch) {
    dispatch(mapRequest());

    const map = this.initMap();

    socket.emit('get_markers');
    socket.on('marker', (account: Account) => {
        dispatch(mapSuccess(account));
        this.addMarker(account, map);
    });
}

function addMarker(account: Account, map: Map): void {
    let coordinates = getCoordinates(account.address);
    // if we have coordinates, then display marker on the map
    if (coordinates) {
        const marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            title: account.name,
            animation: google.maps.Animation.DROP,
        });
    }
}

function getCoordinates(address: string): google.maps.LatLngLiteral {
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address;

    let coordinates = null;
    $.ajax({
        url: url,
        async: false,
        method: 'get',
        success: function (response: any) {
            if (response.status == "OK") {
                coordinates = response.results[0].geometry.location;
            }
        }
    });

    return coordinates;
}