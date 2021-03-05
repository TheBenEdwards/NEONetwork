import React, { Component } from 'react'
import PortalLayout from '../../components/layout/portalLayout'
import PortalComponent from '../../components/portal'

class Portal extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }
  render() {
    return (
      <PortalLayout>
        <PortalComponent/>
      </PortalLayout>
    )
  }
}

export default Portal;