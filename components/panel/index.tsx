import React, { Component } from 'react'
import { PanelMain, PanelDiv, PanelDesc } from '../../styles/panel'
import PanelContainer from './panelContainer'
import { Props, State } from '../../_interfaces/component.panel.interface'
import { PanelModel } from '../../_models/data.panel.model'

class Panel extends Component<Props, State> {
    clickRef?: any;
    constructor(props) {
        super(props);
        this.state = {
            ...new PanelModel(this.props),
        }
        this.clickRef = React.createRef()
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    handleClickOutside = (event) => {
        if (this.clickRef && !this.clickRef.current.contains(event.target)) {
            if (this.state.animationInProgress === false) {
                this.setState({ animationInProgress: true }, () => {
                    if (this.state.isOpen) {
                        this.setState({ animate: !this.state.animate }, () => {
                            setTimeout(() => this.setState({ padding: false }), 400)
                            setTimeout(() => this.setState({ border: false }), 788)
                            setTimeout(() => this.setState({ isOpen: false }), 800)
                        })
                    } else {
                        this.setState({ isOpen: false }, () => {
                            setTimeout(() => this.setState({ animate: false, padding: false, border: false }), 1)
                        })
                    }
                    setTimeout(() => this.setState({ animationInProgress: false }), 810)
                })
            }
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) this.setState({ data: this.props.data })
    }
    handleClick = () => {
        if (this.state.animationInProgress === false) {
            this.setState({ animationInProgress: true }, () => {
                if (this.state.isOpen) {
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
            })
        }
    }
    render() {
        return (
            <PanelMain ref={this.clickRef} portal={this.props.portal} orientation={this.props.orientation}>
                <PanelDiv onClick={this.handleClick} border={this.state.border} orientation={this.props.orientation} altcolour={this.props.altcolour}>
                    <PanelDesc orientation={this.props.orientation}>{this.props.name}</PanelDesc>
                </PanelDiv>
                {this.state.isOpen &&
                    <PanelContainer animate={this.state.animate} padding={this.state.padding} orientation={this.props.orientation} data={this.state.data} altcolour={this.props.altcolour} />
                }
            </PanelMain>
        )
    }
}

export default Panel;