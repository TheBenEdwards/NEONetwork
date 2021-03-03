import React, { Component } from 'react'
import Modal from 'react-modal'
import { Container, Main, Title, FlexContainer } from '../../styles/home'
import { H3 } from '../../styles/text'
import { ModalStyles } from '../../styles/modals'
import { Col } from '../../styles/layout/grid'
import AccountComponent from '../account'
import HomeCard from './homeCard'
import FooterComponent from './footer'
import Panel from '../panel'
import CreateAccountModal from '../modals/createAccountModal'
import LoginAccountModal from '../modals/loginAccountModal'
import { HomeModel } from '../../_models/data.home.model'
import { Props, State } from '../../_interfaces/component.home.interface'

class HomeComponent extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            ...new HomeModel()
        }
    }
    componentDidMount() {
        this.getHomeFields()
        this.getUpdates()
        this.getLinks()
    }
    createAccount = () => {
        console.log('CREATE ACCOUNT')
    }
    loginAccount = () => {
        console.log('LOGIN ACCOUNT')
    }
    getHomeFields = () => {
        this.setState({
            textFields: [
                { name: 'The new way to communicate', text: 'hskrbvabivasouifv auwehfcsiyurvbeiu aouirvhseiuryvs azhkvbseruyvbweruiv' },
                { name: 'This is another test', text: 'hskrbvabivasouifv auwehfcsiyurvbeiu aouirvhseiuryvs azhkvbseruyvbweruiv' },
                { name: 'I work at boxmodel - this is a fun little project', text: 'hskrbvabivasouifv auwehfcsiyurvbeiu aouirvhseiuryvs azhkvbseruyvbweruiv' },
                { name: 'WORK', text: 'hskrbvabivasouifv auwehfcsiyurvbeiu aouirvhseiuryvs azhkvbseruyvbweruiv' },
            ],
            loading: false,
        })
    }
    getUpdates = () => {
        this.setState({
            updateLog: [
                {name: 'Version 2.0.0', date: '2021-07-23', text: 'Complete redesign of the portal. Changed from basic html to react. More cool features!', type: 'Major', href: 'https://github.com/TheBenEdwards'},
                {name: 'Version 1.0.0', date: '2020-05-22', text: 'The final version of the portal first created for the dissertation project. Very basic but still had some cool features.', type: 'Release', href: 'https://github.com/TheBenEdwards'},
            ]
        })
    }
    getLinks = () => {
        this.setState({
            links: [
                {name: 'About the developers', text: 'Who developed this app?', href: 'https://github.com/TheBenEdwards'},
            ]
        })
    }
    toggleLoginModal = () => { this.setState({ loginModalOpen: !this.state.loginModalOpen }) }
    toggleCreateModal = () => { this.setState({ createModalOpen: !this.state.createModalOpen }) }
    handlePanel = (PANEL) => {
        console.log(PANEL)
    }
    render() {
        return (
            <>
                <Container>
                    <Main>
                        <AccountComponent toggleCreateModal={this.toggleCreateModal} toggleLoginModal={this.toggleLoginModal} />
                        <Title>
                            <H3 title>NEON</H3>
                        </Title>
                        <FlexContainer>
                            <Panel key={'nav'} name={'Navigation'} orientation={'left'} data={this.state.links}/>
                            <Col grow span={6}>
                                {!this.state.loading ?
                                    <>
                                        {this.state.textFields.map((item, index) => (
                                            <HomeCard key={index} item={item} />
                                        ))}
                                    </>
                                    :
                                    <>
                                        <HomeCard key={'LOADING'} item={{ name: 'LOADING', text: 'Please wait...' }} />
                                    </>
                                }
                            </Col>
                            <Panel key={'updates'} name={'Update Log'} orientation={'right'} data={this.state.updateLog}/>
                        </FlexContainer>
                    </Main>
                    <FooterComponent />
                </Container>
                <Modal
                    isOpen={this.state.createModalOpen}
                    style={ModalStyles}
                    ariaHideApp={false}
                    onRequestClose={this.toggleCreateModal}
                    shouldCloseOnEsc={true}
                    shouldCloseOnOverlayClick={true}
                >
                    <CreateAccountModal closeModal={this.toggleCreateModal} confirm={this.createAccount} />
                </Modal>
                <Modal
                    isOpen={this.state.loginModalOpen}
                    style={ModalStyles}
                    ariaHideApp={false}
                    onRequestClose={this.toggleLoginModal}
                    shouldCloseOnEsc={true}
                    shouldCloseOnOverlayClick={true}
                >
                    <LoginAccountModal closeModal={this.toggleLoginModal} confirm={this.loginAccount} />
                </Modal>
            </>
        )
    }
}

export default HomeComponent;