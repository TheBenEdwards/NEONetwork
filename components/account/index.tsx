import React, { Component } from 'react'
import { Row, Col } from '../../styles/layout/grid'
import { AccountContainer } from '../../styles/account'
import { StandardButton } from '../../styles/buttons'
 
class AccountComponent extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <AccountContainer>
                <Row>
                    <Col span={6} span700={12} base={5} center>
                        <StandardButton onClick={this.props.toggleCreateModal}>Create Account</StandardButton>
                    </Col>
                    <Col span={6} span700={12} center>
                        <StandardButton onClick={this.props.toggleLoginModal}>Log In</StandardButton>
                    </Col>
                </Row>
            </AccountContainer>
        )
    }
}

export default AccountComponent;