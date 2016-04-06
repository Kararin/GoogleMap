import React from 'react';
import {Modal, Input, Button} from 'react-bootstrap';

export default ({
    show,
    onClickHandler,
    onClose
}) => {
    var input;

    return (
        <div>
            <Modal show={show}>
            <Modal.Header>
                <Modal.Title>Mark title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Input
                type="text"
                label="Input text for mark"
                ref = {c => input = c}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onClose}>Close</Button>
                <Button onClick={(e) => {onClickHandler(input.getValue())}}>Add</Button>
            </Modal.Footer>
            </Modal>
        </div>
    )
}