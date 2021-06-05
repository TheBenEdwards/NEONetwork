import React, { Component } from 'react'
import { SideContainer } from '../../styles/home'
import { ModalHeader, ModalContent, ModalClose, ModalHeaderDetails } from '../../styles/modals'
import { H2 } from '../../styles/text'
import { Form } from '../../styles/inputs/form'
import { ValidateCreateAccount } from '../../functions/validators'
import TextInput from '../inputs/textInput'
import DateInput from '../inputs/dateInput'
import UsernameInput from '../inputs/usernameInput'
import EmailInput from '../inputs/emailInput'
import PasswordInput from '../inputs/passwordInput'
import { SubmitButton } from '../../styles/buttons'

class CreateAccountModal extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            dateOfBirth: new Date(),
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const ValidateStep = ValidateCreateAccount(this.state);

        if (ValidateStep.valid) {

            // TODO When API is ready
            // CreateAccount() 

        } else {
            for (let i = 0, item; !!(item = ValidateStep.errors[i++]);) {
                this.setState({
                    [item.name]: item.error
                })
            }
        }
    }
    render() {
        return (
            <>
                <ModalClose onClick={this.props.closeModal}><a>X</a></ModalClose>
                <ModalHeader>
                    <H2>Create an Account</H2>
                </ModalHeader>
                <ModalContent>
                    <Form>
                        <SideContainer size={3}>
                            <TextInput
                                value={this.state.firstname}
                                name="firstname"
                                label={"First Name"}
                                onChange={this.handleChange}
                                error={this.state.firstnameError}
                                uppercase
                                required
                            />
                            <TextInput
                                value={this.state.lastname}
                                name="lastname"
                                label={"Last Name"}
                                onChange={this.handleChange}
                                error={this.state.lastnameError}
                                uppercase
                                required
                            />
                            <DateInput
                                value={this.state.dateOfBirth}
                                name="dateOfBirth"
                                label={"Date of Birth"}
                                maxDate={new Date()}
                                onChange={this.handleChange}
                                error={this.state.dateOfBirthError}
                                uppercase
                                required
                            />
                        </SideContainer>
                        <UsernameInput
                            value={this.state.username}
                            name="username"
                            onChange={this.handleChange}
                            error={this.state.usernameError}
                            uppercase
                            required
                        />
                        <EmailInput
                            value={this.state.email}
                            name="email"
                            onChange={this.handleChange}
                            error={this.state.emailError}
                            uppercase
                            required
                        />
                        <SideContainer size={2}>
                            <PasswordInput
                                value={this.state.password}
                                name="password"
                                onChange={this.handleChange}
                                error={this.state.passwordError}
                                uppercase
                                required
                            />
                            <PasswordInput
                                value={this.state.passwordConfirm}
                                name="passwordConfirm"
                                onChange={this.handleChange}
                                error={this.state.passwordConfirmError}
                                uppercase
                                required
                                confirm
                            />
                        </SideContainer>
                        <SubmitButton full onClick={this.handleSubmit}><div>Create Account</div><div>{'>'}</div></SubmitButton>
                    </Form>
                </ModalContent>
            </>
        )
    }
}

export default CreateAccountModal;