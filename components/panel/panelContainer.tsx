import React, { Component } from "react";
import { PanelContainerDiv, InternalPanelContainer } from "../../styles/panel";
import PanelItem from './panelItem'
import { Props } from '../../_interfaces/component.panel.interface'

class PanelContainer extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <PanelContainerDiv animate={this.props.animate} padding={this.props.padding} orientation={this.props.orientation}>
        <InternalPanelContainer animate={this.props.animate}>
          {this.props.data.map((item, index) => (
            <PanelItem key={index} item={item}></PanelItem>
          ))}
        </InternalPanelContainer>
      </PanelContainerDiv>
    );
  }
}

export default PanelContainer;
