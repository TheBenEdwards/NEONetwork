import React, { Component } from 'react'
import Router from 'next/router'
import Cookies from 'js-cookie';
import HomeLayout from '../components/layout/homeLayout'
import HomeComponent from '../components/home'
import { State } from '../_interfaces/component.home.interface'
import { LoginFromToken } from '../functions/helpers'

class Home extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }
  componentDidMount() {
    this.authenticate()
  }
  authenticate = () => {
    const PortalCookie = Cookies.get('PortalCookie');
    if (PortalCookie) {
      LoginFromToken(PortalCookie)
    }
  }
  render() {
    if (this.state.loading) return <></>
    return (
      <HomeLayout>
        <HomeComponent />
      </HomeLayout>
    )
  }
}

export default Home;