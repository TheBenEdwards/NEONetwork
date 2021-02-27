import React, { Component } from 'react'
import { Container, Main, Title } from '../../styles/home'
import { H3 } from '../../styles/text'
import HomeCard from './homeCard'
import FooterComponent from './footer'
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