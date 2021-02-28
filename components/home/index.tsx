import React, { Component } from 'react'
import Modal from 'react-modal'
import { Container, Main, Title } from '../../styles/home'
import { H3 } from '../../styles/text'
import { ModalStyles } from '../../styles/modals'
import AccountComponent from '../account'
import HomeCard from './homeCard'
import FooterComponent from './footer'
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
    }
    createAccount = () => {
        console.log('CREATE ACCOUNT')
    }
    toggleCreateModal = () => {
        this.setState({ createModalOpen: !this.state.createModalOpen })
    }
    loginAccount = () => {
        console.log('LOGIN ACCOUNT')
    }
    toggleLoginModal = () => {
        this.setState({ loginModalOpen: !this.state.loginModalOpen })
    }
    getHomeFields = () => {
        this.setState({
            textFields: [
                { name: 'The new way to communicate', text: 'hskrbvabivasouifv auwehfcsiyurvbeiu aouirvhseiuryvs azhkvbseruyvbweruiv' },
                { name: 'This is another test', text: 'hskrbvabivasouifv auwehfcsiyurvbeiu aouirvhseiuryvs azhkvbseruyvbweruiv' },
                { name: 'I work at boxmodel - this is a fun little project', text: 'hskrbvabivasouifv auwehfcsiyurvbeiu aouirvhseiuryvs azhkvbseruyvbweruiv' },
                { name: 'WORK', text: 'hskrbvabivasouifv auwehfcsiyurvbeiu aouirvhseiuryvs azhkvbseruyvbweruiv' },
            ]
        })
    }
    render() {
        return (
            <>
                <Container>
                    <Main>
                        <AccountComponent toggleCreateModal={this.toggleCreateModal} toggleLoginModal={this.toggleLoginModal} />
                        <Title>
                            <H3>NEON</H3>
                        </Title>
                        {this.state.textFields.map((item, index) => (
                            <HomeCard key={index} item={item} />
                        ))}
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