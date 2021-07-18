import React, { Component } from 'react'
import Router from 'next/router'
import { LogoutContainer } from '../styles/layout/standardContain'
import { H1 } from '../styles/text'

class Logout extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {}

    }
    componentDidMount() {
        setTimeout(() => Router.replace("/"), 500)
    }
    render() {
        return (
            <LogoutContainer>
                <H1>Logging out...</H1>
            </LogoutContainer>
        )
    }
}
  
export default Logout;