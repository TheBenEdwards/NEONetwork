import React, { Component } from 'react'
import { TextCard, TextCardField } from '../../styles/home'
import { H3, P } from '../../styles/text'

class HomeCard extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item || {}
        }
    }
    render() {
        return (
            <TextCard>
                <H3 upper>{this.props.item.name}</H3>
                <TextCardField>
                    <P>{this.props.item.text}</P>
                </TextCardField>
            </TextCard>
        )
    }
}

export default HomeCard;