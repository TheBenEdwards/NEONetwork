import React, { Component } from "react";
import { PanelContainerDiv, InternalPanelContainer } from "../../styles/panel";
import PanelItem from './panelItem'
import TwitterFeed from '../panel/twitterFeed'
import { Props } from '../../_interfaces/component.panel.interface'

class PanelContainer extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <PanelContainerDiv animate={this.props.animate} padding={this.props.padding} orientation={this.props.orientation} altcolour={this.props.altcolour}>
        <InternalPanelContainer animate={this.props.animate}>
          {this.props.panelType === 1 ?
            this.props.data.map((item, index) => (
              <PanelItem key={index} item={item}></PanelItem>
            ))
            : this.props.panelType === 2 ?
              <TwitterFeed twitterProfile={this.props.twitterProfile}/>
            :
            null
          }
        </InternalPanelContainer>
      </PanelContainerDiv>
    );
  }
}

export default PanelContainer;
