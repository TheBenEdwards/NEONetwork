import React, { Component } from 'react'
import { FormRow, FormRowInner, LabelFlex, Label, ErrorLabel } from '../../styles/inputs'
import { DatePickerWrapper } from '../../styles/inputs/dates'
import DatePicker from "react-datepicker";
import moment from 'moment'

class DateInput extends Component<any, any> {
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
        this.setState({ value: e });
        let item = { target: { name: this.props.name, value: e } }
        this.props.onChange(item);
    }
    render() {
        return (
            <FormRow>
                <FormRowInner>
                    <LabelFlex>
                        <Label uppercase={this.props.uppercase}>{this.props.label ? this.props.label : 'Date'}</Label>
                    </LabelFlex>
                    <DatePickerWrapper ref={this.props.innerRef}>
                        <DatePicker
                            selected={this.props.value ? new Date(this.props.value) : null}
                            onChange={date => {
                                this.handleChange(date)
                            }}
                            dateFormat={this.props.showTimeSelect ? "dd/MM/yyyy h:mm aa" : "dd/MM/yyyy"}
                            minDate={this.props.minDate}
                            maxDate={this.props.maxDate}
                            showTimeSelect={this.props.showTimeSelect}
                            placeholderText={this.props.placeholder}
                            readOnly={this.props.readOnly}
                            popperPlacement="bottom"
                            popperModifiers={{ preventOverflow: { enabled: true } }}
                        />
                    </DatePickerWrapper>
                </FormRowInner>
                {this.state.error &&
                    <ErrorLabel>{this.state.error}</ErrorLabel>
                }
            </FormRow>
        )
    }
}

export default DateInput;