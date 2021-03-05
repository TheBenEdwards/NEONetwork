import React, { Component } from 'react'
import { FormRow, FormRowInner, LabelFlex, Label, ErrorLabel } from '../../styles/inputs'

class UsernameInput extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value ? this.props.value : "",
            active: this.props.value ? true : false,
            error: this.props.error ? this.props.error : "",
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({ value: this.props.value ? this.props.value : "", active: this.props.value ? true : false, error: null })
        }
        if (prevProps.error !== this.props.error || (this.props.error && this.state.error === (null || undefined))) {
            this.setState({ error: this.props.error })
        }
    }
    setFocus = () => {
        this.setState({ active: true })
    }
    resetFocus = () => {
        this.setState({ active: this.state.value ? true : false })
        if (!this.state.value && this.props.required) {
            this.setState({ error: "This value is required." })
        }
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value });
        this.props.onChange(e);
    }
    render() {
        return (
            <FormRow>
                <FormRowInner>
                    <LabelFlex>
                        <Label>Username</Label>
                        {this.props.required && 
                            <Label>Required</Label>
                        }
                    </LabelFlex>
                    <input type="username" placeholder={this.props.placeholder ? this.props.placeholder : "" } name={this.props.name} value={this.state.value} onFocus={this.setFocus} onBlur={this.resetFocus} onChange={(e) => this.handleChange(e)} readOnly={this.props.readonly ? true : false} />
                </FormRowInner>
                {this.state.error &&
                    <ErrorLabel>{this.state.error}</ErrorLabel>
                }
            </FormRow>
        )
    }
}

export default UsernameInput;