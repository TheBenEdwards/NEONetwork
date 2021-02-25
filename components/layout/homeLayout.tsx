import React, { Component } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { HomeContainer } from '../../styles/layout/standardContain'

class HomeLayout extends Component<any> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>NeoN - Home</title>
                    <link rel="icon" href="/static/favicon.ico" />
                </Head>
                <HomeContainer small={this.props.small} push={this.props.push}>
                    {this.props.children}
                </HomeContainer>
            </React.Fragment>
        )
    }
}

export default HomeLayout;
