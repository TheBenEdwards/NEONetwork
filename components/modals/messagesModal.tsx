import React, { Component } from 'react'
import Router from 'next/router'
import { ModalHeader, ModalContent, ModalClose, ModalHeaderDetails } from '../../styles/modals'
import { H2 } from '../../styles/text'
import { Form } from '../../styles/inputs/form'
import { ValidateLogin } from '../../functions/validators'
import UsernameInput from '../inputs/usernameInput'
import PasswordInput from '../inputs/passwordInput'
import { SubmitButton } from '../../styles/buttons'

class MessagesModal extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const ValidateStep = ValidateLogin(this.state);

        if (ValidateStep.valid) {

            this.authenticate()

        } else {//DISPLAY ERRORS
            for (let i = 0, item; !!(item = ValidateStep.errors[i++]);) {
                this.setState({
                    [item.name]: item.error
                })
            }
        }
    }
    authenticate = () => {
        if (this.state.username.toLowerCase() === 'thebenedwards' && this.state.password === 'password1234') {
            Router.push("/portal")
        } else {
            Router.push("/")
        }
    }
    render() {
        return (
            <>
                <ModalClose onClick={this.props.closeModal}><a>X</a></ModalClose>
                <ModalHeader>
                    <H2>Messages</H2>
                </ModalHeader>
                <ModalContent>
                    <ModalHeaderDetails>Manage your Messages</ModalHeaderDetails>
                    <Form>

                    </Form>
                </ModalContent>
            </>
        )
    }
}

export default MessagesModal;