import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import MyForm from './Form'

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div className="justify-content-center">
                <Button color="danger"  onClick={this.toggle} >GET MY EBOOK</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>GET MY EBOOK</ModalHeader>
                    <ModalBody>
                        <MyForm/>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;