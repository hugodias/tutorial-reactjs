'use strict';


var Timeline = React.createClass({

    getDefaultProps() {
        return {
            api: 'https://rawgit.com/hugodias/3dca72cff7232ef60149/raw/33c300bfdca5c739d06bd7efe723a685debc873a/twitter.json'
        }
    },

    getInitialState() {
        return {
            tweets: []
        }
    },

    componentDidMount() {
        var _this = this;

        $.get(this.props.api, function (result) {

            result = [result];

            if (_this.isMounted()) {

                if (typeof result === 'object') {

                    for (var i = 0; i < result.length; i++) {
                        _this.state.tweets.push(result[i]);
                    }

                    _this.setState();
                }
            }
        });
    },

    render() {
        let renderTweet = (tweet) => {
            return <Tweet text={tweet.text} user={tweet.user} />;
        };

        return (
            <div className="timeline">
          {this.state.tweets.map(renderTweet)}
            </div>
        )
    }
});
