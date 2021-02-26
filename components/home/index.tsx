import React, { Component } from 'react'
import { Container, Main, Footer, Title, Logo } from '../../styles/home'
import { H3 } from '../../styles/text'
import { Col, Row } from '../../styles/layout/grid'
import HomeCard from './homeCard'
import FooterComponent from './footer'

class HomeComponent extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            textFields: [],
        }
    }
    componentDidMount() {
        this.getHomeFields()
    }
    getHomeFields = () => {
        this.setState({ textFields: [{ name: 'The new way to communicate', text: 'hskrbvabivasouifv auwehfcsiyurvbeiu aouirvhseiuryvs azhkvbseruyvbweruiv' }] })
    }
    render() {
        return (
            <Container>
                <Main>
                    <Title>
                        <H3>NEON</H3>
                    </Title>
                    {this.state.textFields.map((item, index) => (
                        <HomeCard key={index} item={item} />
                    ))}
                </Main>
                <FooterComponent/>
            </Container>
        )
    }
}

export default HomeComponent;