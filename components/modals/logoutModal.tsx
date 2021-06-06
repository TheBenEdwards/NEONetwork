import React, { Component } from 'react'
import Router from 'next/router'
import { ModalHeader, ModalContent, ModalClose, ModalHeaderDetails } from '../../styles/modals'
import { H2 } from '../../styles/text'
import { Form } from '../../styles/inputs/form'
import { ValidateLogin } from '../../functions/validators'
import UsernameInput from '../inputs/usernameInput'
import PasswordInput from '../inputs/passwordInput'
import { SubmitButton } from '../../styles/buttons'

class LogoutModal extends Component<any, any> {
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
                    <H2>Logout</H2>
                </ModalHeader>
                <ModalContent>
                    <ModalHeaderDetails>Are you sure you want to logout?</ModalHeaderDetails>
                    <Form>
                        <button onClick={() => this.props.confirm()}>Logout</button>
                    </Form>
                </ModalContent>
            </>
        )
    }
}

export default LogoutModal;