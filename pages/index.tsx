import React, { Component } from 'react'
import HomeLayout from '../components/layout/homeLayout'
import HomeComponent from '../components/home'
import { Props } from '../_interfaces/component.home.interface'

class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }
  render() {
    return (
      <HomeLayout>
        <HomeComponent />
      </HomeLayout>
    )
  }
}

export default Home;