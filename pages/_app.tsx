import * as React from 'react'
import App from 'next/app'
import Theme from './_theme'
import Page from '../components/layout/page'

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
                <Theme>
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </Theme>
            </>
        )
    }
}

export default MyApp;