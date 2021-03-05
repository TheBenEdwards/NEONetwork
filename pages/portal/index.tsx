import React, { Component } from 'react'
import HomeLayout from '../../components/layout/homeLayout'
import HomeComponent from '../../components/home'

class Portal extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }
  render() {
    return (
      <HomeLayout>
        TEST
      </HomeLayout>
    )
  }
}

export default Portal;