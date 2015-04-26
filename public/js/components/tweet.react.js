"use strict";

var Avatar = React.createClass({
    render() {
        return (
            <div className="avatar">
                <div class="avatar__picture">
                    <img src={this.props.picture}/>
                </div>
                <div class="avatar__username">
                {this.props.username}
                </div>
            </div>
        )
    }
});

var Tweet = React.createClass({
    render() {
        return (
            <div className="tweet">
                <Avatar username={this.props.user.screen_name} picture={this.props.user.profile_image_url}/>
                <div className="tweet__container">{this.props.text}</div>
            </div>
        )
    }
});