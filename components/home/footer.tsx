import React, { Component } from 'react'
import { A } from '../../styles/text'
import { Footer, Logo } from '../../styles/home'
import { Props } from '../../_interfaces/component.homeFooter.interface'

class FooterComponent extends Component<Props> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Footer>
                <A href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                    Powered by{' '}
                    <Logo><img src="/static/vercel.svg" alt="Vercel Logo" /></Logo>
                </A>
            </Footer>
        )
    }
}

export default FooterComponent;