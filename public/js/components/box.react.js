'use strict';


var HashTag = React.createClass({
    getDefaultProps() {
        return {
            link: '#',
            title: ''
        }
    },

    render() {
        return (
            <li>
                <a href={this.props.link}>{this.props.title}</a>
            </li>
        )
    }
});


var Box = React.createClass({

    getDefaultProps() {
        return {
            title: 'Default Box',
            api: ''
        }
    },

    getInitialState() {
        return {
            items: []
        }
    },

    componentDidMount() {

        $.get(this.props.api, function (result) {

            if (this.isMounted()) {

                if (typeof result === 'object') {
                    for (var i = 0; i < result.length; i++) {
                        this.state.items.push(result[i])
                    }

                    this.setState();
                }

            }
        }.bind(this));
    },


    render() {

        let renderItem = (item) => {
            if (item.is_hashtag)
                return <HashTag title={item.title} link={item.link}/>
        };

        return (
            <div className="box">
                {this.props.title}
                <ul>{this.state.items.map(renderItem)}</ul>
            </div>

        )
    }
});
