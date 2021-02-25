import React, { Component } from 'react'
import { Container, Main, Footer, Title, Logo } from '../../styles/home'
import HomeCard from './homeCard'

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
        this.setState({ textFields: [{name: 'The new way to communicate', text: 'hskrbvabivasouifv auwehfcsiyurvbeiu aouirvhseiuryvs azhkvbseruyvbweruiv'}] })
    }
    render() {
        return (
            <Container>
                <Main>
                    <Title>
                        NEON
                    </Title>

                    {this.state.textFields.map(item => (
                        <HomeCard item={item}/>
                    ))}
                </Main>

                <Footer>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{' '}
                        <Logo><img src="/static/vercel.svg" alt="Vercel Logo" /></Logo>
                    </a>
                </Footer>
            </Container>
        )
    }
}

export default HomeComponent;