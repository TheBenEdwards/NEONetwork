import React, { Component } from 'react'
import Router from 'next/router'
import { PanelItemContainer, PanelItemType, FlexContainer, PanelItemTypeName, PanelItemTypeDate, PanelItemDesc, HelpText } from '../../styles/panel'
import { Props, State } from '../../_interfaces/component.panelItem.interface'
import { PanelItemModel } from '../../_models/data.panelItem.model'

class PanelItem extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            ...new PanelItemModel(this.props.item)
        };
    }
    navigate = () => {
        Router.push(this.state.href)
    }
    render() {
        return (
            <PanelItemContainer onClick={this.navigate}>
                <PanelItemType>{this.state.type}</PanelItemType>
                <FlexContainer> 
                    <PanelItemTypeName>{this.state.name}</PanelItemTypeName>
                    {this.state.date !== '' &&
                        <PanelItemTypeDate>{this.state.date}</PanelItemTypeDate>
                    }
                </FlexContainer>
                <PanelItemDesc>{this.state.text}</PanelItemDesc>
                <HelpText>Click to learn more!</HelpText>
            </PanelItemContainer>
        )
    }
}

export default PanelItem;