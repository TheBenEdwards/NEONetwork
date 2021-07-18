import React, { Component } from 'react'
import Router from 'next/router'
import Cookies from 'js-cookie';
import PortalLayout from '../../components/layout/portalLayout'
import PortalComponent from '../../components/portal'
import { UniversalLogout } from '../../functions/helpers'

class Portal extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }
  componentDidMount() {
    this.authenticate()
  }
  authenticate = () => {
    const CookiePresent = Cookies.get('PortalCookie');
    if (!CookiePresent) {
      UniversalLogout()
    } else {
      this.setState({ loading: false })
    }
  }
  render() {
    if (this.state.loading) return <></>
    return (
      <PortalLayout>
        <PortalComponent/>
      </PortalLayout>
    )
  }
}

export default Portal;