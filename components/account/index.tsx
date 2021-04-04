import React, { Component } from 'react'
import Router from 'next/router'
import { H1 } from '../../styles/text'
import { AccountContainer, StickyContainer, AccountTitle, AccountForm, Subtitle, Inputform, ButtonForm, ForgotButton, CreateForm, HelpForm } from '../../styles/account'
import { StandardButton } from '../../styles/buttons'
import { Form } from '../../styles/inputs/form'
import { ValidateLogin } from '../../functions/validators'
import UsernameInput from '../inputs/usernameInput'
import PasswordInput from '../inputs/passwordInput'
import { SubmitButton } from '../../styles/buttons'

class AccountComponent extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {}
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
            <AccountContainer>
                <StickyContainer>
                    <AccountTitle>
                        <H1>Your Event Hub</H1>
                    </AccountTitle>
                    <AccountForm>
                        <Form>
                            <Subtitle>Log-In</Subtitle>
                            <Inputform>
                                <UsernameInput
                                    value={this.state.username}
                                    name="username"
                                    onChange={this.handleChange}
                                    error={this.state.usernameError}
                                    uppercase
                                    required
                                />
                                <PasswordInput
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.handleChange}
                                    error={this.state.passwordError}
                                    uppercase
                                    required
                                />
                                <SubmitButton full onClick={this.handleSubmit}><div>Continue</div><div>{'>'}</div></SubmitButton>
                            </Inputform>
                        </Form>
                        <ButtonForm>
                            <ForgotButton>Forgot Username</ForgotButton>
                            <ForgotButton>Forgot Password</ForgotButton>
                        </ButtonForm>
                    </AccountForm>
                    <CreateForm>
                        <Subtitle onClick={this.props.toggleCreateModal}>Create Account</Subtitle>
                    </CreateForm>
                    <HelpForm>
                        <Subtitle small>Need Help?</Subtitle>
                    </HelpForm>
                </StickyContainer>
            </AccountContainer>
        )
    }
}

export default AccountComponent;