import React from 'react';
import Map from './container/Map';
import Modal from './container/Modal';
import MarkerPanel from './container/MarkerPanel';

export default () => (
    <div className = "content">
        <div className = "panel">
            <MarkerPanel/>
            <Modal/>
        </div>
        <Map/>
    </div>
)