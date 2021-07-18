import React, { Component } from "react";
import { Timeline } from 'react-twitter-widgets'
import { TwitterFeedContainer, TwitterAltContainer } from '../../../styles/panel'
import { H2, P } from '../../../styles/text'
import { SubmitButton } from '../../../styles/buttons'
import TextInput from "../../inputs/textInput";

class TwitterFeed extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            twitterProfile: '',
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.twitterProfile) {
            // SetTwitterProfile //API POST to set up the twitter profile user wants to follow
        } else {
            this.setState({ twitterProfileError: 'Must contain a profile' })
        }
    }
    render() {
        return (
            <TwitterFeedContainer>
                {this.props.twitterProfile ?
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: 'Edwards_Ben60'
                        }}
                        options={{ 
                            theme: "dark",
                            chrome: "noheader, nofooter" 
                        }}
                        // screenName={this.props.twitterProfile}
                        // theme="dark"
                        // borderColor="#3792cb"
                        // noHeader
                        // noFooter
                        // noScrollbar
                    />
                    :
                    <TwitterAltContainer>
                        <H2>Please select a Twitter profile to follow</H2>
                        <TextInput
                            value={this.state.twitterProfile}
                            name="twitterProfile"
                            onChange={this.handleChange}
                            error={this.state.twitterProfileError}
                            placeholder={'Twitter Handle'}
                            required
                        />
                        <P>This can be changed from Manage Account later</P>
                        <SubmitButton full onClick={this.handleSubmit}><div>Follow Account</div><div>{'>'}</div></SubmitButton>
                    </TwitterAltContainer>
                }

            </TwitterFeedContainer>
        );
    }
}

export default TwitterFeed;
