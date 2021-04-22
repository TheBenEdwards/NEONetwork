import React, { Component } from 'react'
import Modal from 'react-modal'
import { Container, Main, CardContainer, TitleContainer } from '../../styles/home'
import { ModalStyles } from '../../styles/modals'
import { Col } from '../../styles/layout/grid'
import { Title } from '../../styles/account'
import AccountComponent from '../account'
import HomeCard from './homeCard'
import Panel from '../panel'
import CreateAccountModal from '../modals/createAccountModal'
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
        // this.setupHome()
    }
    createAccount = () => {
        console.log('CREATE ACCOUNT')
    }
    // setupHome = () => {
    //     this.setState({
    //         textFields: [
    //             { name: 'The new way to communicate', text: 'NeoN, combining the Japanese word Neo, meaning new, and N standing for Network, aims to provide a unique service to charities and organisations that other social networks dont provide. With a platform specifically designed for your organisation, there is no better place to organise events and plan for the future in order to help people in need. One of the many features, Geogoraphic tagging allows users to plan and organise events by showing exactly where the events will be held. A messaging system allowing users to have one-on-one discussions with other organisations is another key feature of the platform and will allow you to not only grow support for your organisation, but also for the vital events that your organisation organises in order to fight the growing issue of food poverty accross the world.' },
    //             { name: 'This is another test', text: 'At NeoN, we believe that nobody should ever have to suffer through poverty. However, asset management plays a massive part in how organisations can help people in need, and often organisations struggle by themselves to help people over a large area. Therefore, allowing organisations to work together can really help as it combines their efforts and their resources, and makes teamwork a critical focus of the platform itself. Using the most up-to-date research, we created a platform specifically for organisations to organise events and to assist each other in order to increase the effectivness of their relief efforts by combining their resources.' },
    //             { name: 'I work at boxmodel - this is a fun little project', text: 'How can you Help? Often a phrase used by charities and other organisations to try to get the public to help them raise funds or awareness for a noble cause. In this case, we ask: how can your organisation help other organisations in fighting food poverty? The answer is simple: By joining NeoN you will be helping to further enlarge the network of charities across the country who aim for one ultimate goal: To see the end of poverty. Join us today by creating an account and start joining in with other organisations by creating events, joining in discussions and ultimately lending your resources to help or even have your own event. Thank you, from everyone at NeoN.' },
    //             { name: 'WORK', text: 'NeoN is a tool designed to make the world we live in a better place. This platform was developed using research data from all over the globe. Farming systems in the US to phone systems in marginalised Australian communites were examined to find what organisations such as your own would be looking for in a platform where communication, planning and clarity are essential. If you are searching for all of this, dont hesitate to join us. It\'s Free!' },
    //         ],
    //         loading: false
    //     })
    // }
    toggleLoginModal = () => { this.setState({ loginModalOpen: !this.state.loginModalOpen }) }
    toggleCreateModal = () => { this.setState({ createModalOpen: !this.state.createModalOpen }) }
    render() {
        // if (this.state.loading) return <></>
        return (
            <>
                <Container>
                    <Main>
                        <CardContainer>
                            <TitleContainer>
                                <Title>Portal</Title>
                            </TitleContainer>
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
                        </CardContainer>
                        <AccountComponent toggleCreateModal={this.toggleCreateModal} />
                    </Main>
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
            </>
        )
    }
}

export default HomeComponent;