import React, { Component } from 'react'
import { Card, Text } from '../../styles/home/card'
import { H3, P } from '../../styles/text'
import { HomeCardModel } from '../../_models/data.homeCard.model'
import { Props, State } from '../../_interfaces/component.homeCard.interface'

class HomeCard extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            ...new HomeCardModel(this.props)
        }
    }
    render() {
        return (
            <Card>
                <H3 upper>{this.props.item.name}</H3>
                <Text>
                    <P>{this.props.item.text}</P>
                </Text>
            </Card>
        )
    }
}

export default HomeCard;