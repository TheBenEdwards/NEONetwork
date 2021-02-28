import React, { Component } from 'react'
import { ModalHeader, ModalContent, ModalClose } from '../../styles/modals'
import { H2 } from '../../styles/text'

class CreateAccountModal extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <ModalClose onClick={this.props.closeModal}><a>X</a></ModalClose>
                <ModalHeader>
                    <H2>Login</H2>
                </ModalHeader>
                <ModalContent>

                </ModalContent>
            </>
        )
    }
}

export default CreateAccountModal;