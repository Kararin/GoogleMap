import React from 'react';
import {Panel, Input, Button} from 'react-bootstrap';

export default ({
    show,
    createMarker,
    onClose
}) => {
    var input;

    return (
        <div style = {{
            display: show? 'block': 'none'
        }}>
            <Panel className = "subpanel" header="Add marker">
                <Input
                    type="text"
                    label="Input text for mark"
                    ref = {c => input = c}/>

                <Button onClick = {onClose}>Close</Button>
                <Button onClick = {e => {
                    createMarker(input.getValue());
                    onClose();
                }}>Add</Button>
            </Panel>
        </div>
    )
}