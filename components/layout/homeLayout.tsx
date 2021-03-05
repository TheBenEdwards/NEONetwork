import React, { Component } from 'react'
import { HomeContainer } from '../../styles/layout/standardContain'

class HomeLayout extends Component<any> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <HomeContainer small={this.props.small} push={this.props.push}>
                    {this.props.children}
                </HomeContainer>
            </React.Fragment>
        )
    }
}

export default HomeLayout;
