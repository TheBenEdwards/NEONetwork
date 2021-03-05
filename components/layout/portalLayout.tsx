import React, { Component } from 'react'
import { PortalContainer } from '../../styles/layout/standardContain'

class PortalLayout extends Component<any> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <PortalContainer small={this.props.small} push={this.props.push}>
                    {this.props.children}
                </PortalContainer>
            </React.Fragment>
        )
    }
}

export default PortalLayout;
