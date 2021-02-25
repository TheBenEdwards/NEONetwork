import React, { Component } from 'react'
import { Footer, Logo } from '../../styles/home'

class FooterComponent extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Footer>
                <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                    Powered by{' '}
                    <Logo><img src="/static/vercel.svg" alt="Vercel Logo" /></Logo>
                </a>
            </Footer>
        )
    }
}

export default FooterComponent;