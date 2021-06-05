import React, { Component } from 'react'
import Router from 'next/router'
import Modal from 'react-modal'
import { ModalStyles } from '../../styles/modals'
import ProfileModal from '../modals/manageProfileModal'
import AddToFeedModal from '../modals/addToFeedModal'
import LinksModal from '../modals/linksModal'
import MessagesModal from '../modals/messagesModal'
import LogoutModal from '../modals/logoutModal'
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
            navItems: [ //Get from api to see accounts permissions on which buttons may be used
                { name: 'Profile', function: 'toggleProfileModal' }, { name: 'Add to feed', function: 'toggleAddToFeedModal' }, { name: 'Links', function: 'toggleLinksModal' }, { name: 'Messages', function: 'toggleMessagesModal' }, { name: 'Log Out', function: 'toggleLogoutModal' }
            ],
            resultItems: [ //Get from api all posts relevant to this user
                { title: 'Post1', type: 'text' }, { title: 'Event1', type: 'event' }, { title: 'Profile1', type: 'profile' }
            ],
            loading: false,
        })
    }
    toggleProfileModal = () => { this.setState({ manageProfileModalOpen: !this.state.manageProfileModalOpen }) }
    toggleAddToFeedModal = () => { this.setState({ addToFeedModalOpen: !this.state.addToFeedModalOpen }) }
    toggleLinksModal = () => { this.setState({ linksModalOpen: !this.state.linksModalOpen }) }
    toggleMessagesModal = () => { this.setState({ messagesModalOpen: !this.state.messagesModalOpen }) }
    toggleLogoutModal = () => { this.setState({ logoutModalOpen: !this.state.logoutModalOpen }) }
    saveProfile = () => {
        console.log('save profile')
    }
    addToFeed = () => {
        console.log('add to feed')
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
                        <NavigationController
                            navItems={this.state.navItems}
                            toggleProfileModal={this.toggleProfileModal}
                            toggleAddToFeedModal={this.toggleAddToFeedModal}
                            toggleLinksModal={this.toggleLinksModal}
                            toggleMessagesModal={this.toggleMessagesModal}
                            toggleLogoutModal={this.toggleLogoutModal}
                        />
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
                <Modal
                    isOpen={this.state.addToFeedModalOpen}
                    style={ModalStyles}
                    ariaHideApp={false}
                    onRequestClose={this.toggleAddToFeedModal}
                    shouldCloseOnEsc={true}
                    shouldCloseOnOverlayClick={true}
                >
                    <AddToFeedModal closeModal={this.toggleAddToFeedModal} confirm={this.addToFeed} />
                </Modal>
                <Modal
                    isOpen={this.state.linksModalOpen}
                    style={ModalStyles}
                    ariaHideApp={false}
                    onRequestClose={this.toggleLinksModal}
                    shouldCloseOnEsc={true}
                    shouldCloseOnOverlayClick={true}
                >
                    <LinksModal closeModal={this.toggleLinksModal} />
                </Modal>
                <Modal
                    isOpen={this.state.messagesModalOpen}
                    style={ModalStyles}
                    ariaHideApp={false}
                    onRequestClose={this.toggleMessagesModal}
                    shouldCloseOnEsc={true}
                    shouldCloseOnOverlayClick={true}
                >
                    <MessagesModal closeModal={this.toggleMessagesModal} />
                </Modal>
                <Modal
                    isOpen={this.state.logoutModalOpen}
                    style={ModalStyles}
                    ariaHideApp={false}
                    onRequestClose={this.toggleLogoutModal}
                    shouldCloseOnEsc={true}
                    shouldCloseOnOverlayClick={true}
                >
                    <LogoutModal closeModal={this.toggleLogoutModal} confirm={this.logout} />
                </Modal>
            </>
        )
    }
}

export default PortalComponent;