import React, { Component } from "react";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
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
            <>
                Manage your account
            </>
        );
    }
}

export default TwitterFeed;
