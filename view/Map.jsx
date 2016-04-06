import React from 'react';

class Map extends React.Component {
    componentDidMount() {
        this.props.initMap(this.mapEl);
    }

    render() {
        return (
            <div className = "map" ref = {c => this.mapEl = c}>
            </div>
        )
    }
}

export default Map;