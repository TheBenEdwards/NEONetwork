import React, { Component } from 'react'
import { EventItemsContainer } from '../../styles/portal'
import PostItem from './postItem'

class EventContainer extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <EventItemsContainer>
                {this.props.events.map((item, index) => (
                    <PostItem key={index} feed={item}/>
                ))}
            </EventItemsContainer>
        )
    }
}

export default EventContainer;