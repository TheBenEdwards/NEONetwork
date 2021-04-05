import React, { Component } from 'react';
import moment from 'moment';
import { Card, Banner, DataContainer, PostTitle, PostType, PostName, PostDate } from '../../styles/portal/card'

class PostItem extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Card>
                <Banner type={this.props.feed.type}/>
                <DataContainer>
                    <PostTitle>
                        <PostType type={this.props.feed.type}>Type: {this.props.feed.type}</PostType>
                        <PostName>{this.props.feed.title}</PostName>
                        <PostDate>Posted: {moment(new Date()).format('HH:mm, Do MMMM YYYY')}</PostDate>
                    </PostTitle>
                </DataContainer>
            </Card>
        )
    }
}

export default PostItem;