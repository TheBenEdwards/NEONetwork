import React, { Component } from 'react'
import Head from 'next/head'
import cookies from 'next-cookies'
import Cookies from 'js-cookie'
import { connect } from 'react-redux'

class Index extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <>
                <Head>
                    <title>NeoNetwork</title>
                    <link rel="icon" href="/static/favicon.ico" />
                </Head>

                <section>
                    Test
                </section>
            </>
        )
    }
}
  
export default Index;