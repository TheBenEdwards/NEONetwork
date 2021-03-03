import React, { Component } from 'react'
import { PanelMain, PanelDiv, PanelDesc } from '../../styles/panel'
import PanelContainer from './panelContainer'
import { Props, State } from '../../_interfaces/component.panel.interface'
import { PanelModel } from '../../_models/data.panel.model'

class Panel extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            ...new PanelModel(this.props),
        }
    }
    componentDidUpdate(prevProps) {
        if(prevProps.data !== this.props.data) this.setState({ data: this.props.data })
    }
    handleClick = () => {
        if(this.state.animationInProgress === false){
            this.setState({ animationInProgress: true }, () => {
                if(this.state.isOpen) {
                    this.setState({ animate: !this.state.animate }, () => {
                        setTimeout(() => this.setState({ padding: !this.state.padding }), 400)
                        setTimeout(() => this.setState({ border: !this.state.border }), 788)
                        setTimeout(() => this.setState({ isOpen: !this.state.isOpen }), 800)
                    })
                } else {
                    this.setState({ isOpen: !this.state.isOpen }, () => {
                        setTimeout(() => this.setState({ animate: !this.state.animate, padding: !this.state.padding, border: !this.state.border }), 1)
                    })
                }
                setTimeout(() => this.setState({ animationInProgress: false }), 810)
            })}
    }
    render() {
        return (
            <PanelMain>
                <PanelDiv onClick={this.handleClick} border={this.state.border} orientation={this.props.orientation}>
                    <PanelDesc orientation={this.props.orientation}>
                        {this.state.isOpen ? this.props.orientation === 'left' ? '⬆' : '⬆' : this.props.orientation === 'left' ? '⬇' : '⬇'} {this.props.name} {this.state.isOpen ? '(click to collapse)' : '(click to expand)'} {this.state.isOpen ? this.props.orientation === 'left' ? '⬆': '⬆' : this.props.orientation === 'left' ? '⬇' : '⬇' }
                    </PanelDesc>
                </PanelDiv>
                {this.state.isOpen &&
                    <PanelContainer animate={this.state.animate} padding={this.state.padding} orientation={this.props.orientation} data={this.state.data}/>
                }
            </PanelMain>
        )
    }
}

export default Panel;