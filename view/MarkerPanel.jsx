import React from 'react';
import {Panel, Button, Input} from 'react-bootstrap';

export default ({
    getCoordByAddress
}) => {
    var input;

    return (
        <div>
            <Panel className = "subpanel" header="Add marker">
                <Input
                    type = "text"
                    label = "Input address"
                    ref = {c => input = c}
                />
                <Button onClick = {e => {
                    getCoordByAddress(input.getValue());
                }}>
                    OK
                </Button>
            </Panel>
        </div>
     )
}