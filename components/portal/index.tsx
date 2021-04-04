import React, { Component } from 'react'
import Modal from 'react-modal'
import { Container, Main, Title, FlexContainer } from '../../styles/portal'
import { Col } from '../../styles/layout/grid'
import Panel from '../panel'
import NavigationController from './navigationController'

class PortalComponent extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            navItems: [],
            loading: true
        }
    }
    componentDidMount() {
        this.setupPortal()
    }
    setupPortal = () => {
        this.setState({
            navItems: [
                { name: 'Profile' }, { name: 'Add to feed' }, { name: 'Links' }, { name: 'Messages' }, { name: 'Log Out' }
            ],
            loading: false,
        })
    }
    render() {
        if (this.state.loading) return <></>
        return (
            <>
                <Container>
                    <Main>
                        <NavigationController navItems={this.state.navItems} />
                        <FlexContainer>
                            <Panel key={'account'} name={'Account'} orientation={'left'} data={this.state.links} altcolour portal />
                            <Col grow span={6}>

                            </Col>
                            <Panel key={'twitter'} name={'Twitter'} orientation={'right'} data={this.state.updateLog} altcolour portal />
                        </FlexContainer>
                    </Main>
                </Container>
            </>
        )
    }
}

export default PortalComponent;