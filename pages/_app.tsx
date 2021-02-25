import * as React from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider } from "styled-components";
import Page from '../components/layout/page'
import Theme from '../styles/theme'

class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <ThemeProvider theme={Theme}>
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </ThemeProvider>
            </>
        )
    }
}

export default MyApp;