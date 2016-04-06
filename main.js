import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import Main from './Main.jsx';
import store from './store';

document.addEventListener('DOMContentLoaded', () => {
    var el = document.getElementById('content');

    store.subscribe(() => {
        console.log(store.getState());
    });

    ReactDOM.render(
        <Provider store = {store}>
            <Main/>
        </Provider>, el
    )
});

const addMarker = (e, map) => {
    var marker = new google.maps.Marker({
        position: e.latLng,
        map,
        title: 'Kararin'
    });
};

const addEvents = () => {
    // document.getElementById('addMarker').addEventListener('click', showModal);
};

const showModal = (e) => {
    document.getElementById('modal').style.display = 'block';
};