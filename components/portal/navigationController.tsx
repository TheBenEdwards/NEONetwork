import React, { Component } from 'react'
import { NavBar, NavItem } from '../../styles/portal/navigation'

class NavigationController extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            navItems: this.props.navItems || [],
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) this.setState({ navItems: this.props.navItems })
    }
    handleClick = (ITEM) => {
        if (ITEM === 'toggleProfileModal') {
            this.props.toggleProfileModal()
        } else if (ITEM === 'toggleAddToFeedModal') {
            this.props.toggleAddToFeedModal()
        } else if (ITEM === 'toggleLinksModal') {
            this.props.toggleLinksModal()
        } else if (ITEM === 'toggleMessagesModal') {
            this.props.toggleMessagesModal()
        } else if (ITEM === 'toggleLogoutModal') {
            console.log('LOGOUT MODAL')
            this.props.toggleLogoutModal()
        }
    }
    render() {
        return (
            <NavBar>
                {this.state.navItems.map((item, index) => (
                    <NavItem key={index} onClick={() => this.handleClick(item.function)}>{item.name}</NavItem>
                ))}
            </NavBar>
        )
    }
}

export default NavigationController;