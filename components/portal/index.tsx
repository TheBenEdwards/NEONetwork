import React, { Component } from 'react'
import Router from 'next/router'
import Modal from 'react-modal'
import { ModalStyles } from '../../styles/modals'
import ProfileModal from '../modals/manageProfileModal'
import { Container, Main, FlexContainer } from '../../styles/portal'
import Panel from '../panel'
import NavigationController from './navigationController'
import PostContainer from './postContainer'

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
                { name: 'Profile', function: 'toggleProfileModal' }, { name: 'Add to feed' }, { name: 'Links' }, { name: 'Messages' }, { name: 'Log Out', function: 'logout' }
            ],
            resultItems: [
                { title: 'Post1', type: 'text' }, { title: 'Event1', type: 'event' }, { title: 'Profile1', type: 'profile' }
            ],
            loading: false,
        })
    }
    toggleProfileModal = () => { console.log('here'),this.setState({ manageProfileModalOpen: !this.state.manageProfileModalOpen }) }
    saveProfile = () => {
        console.log('save profile')
    }
    logout = () => {
        Router.push("/")
    }
    render() {
        if (this.state.loading) return <></>
        return (
            <>
                <Container>
                    <Main>
                        <NavigationController navItems={this.state.navItems} toggleProfileModal={this.toggleProfileModal} logout={this.logout}/>
                        <FlexContainer>
                            <Panel key={'account'} name={'Manage Account'} orientation={'left'} data={this.state.links} altcolour portal />
                            <PostContainer events={this.state.resultItems} />
                            <Panel key={'twitter'} name={'Twitter Feed'} orientation={'right'} data={this.state.updateLog} altcolour portal />
                        </FlexContainer>
                    </Main>
                </Container>
                <Modal
                    isOpen={this.state.manageProfileModalOpen}
                    style={ModalStyles}
                    ariaHideApp={false}
                    onRequestClose={this.toggleProfileModal}
                    shouldCloseOnEsc={true}
                    shouldCloseOnOverlayClick={true}
                >
                    <ProfileModal closeModal={this.toggleProfileModal} confirm={this.saveProfile} />
                </Modal>
            </>
        )
    }
}

export default PortalComponent;