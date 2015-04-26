'use strict';


var App = React.createClass({

  render: function() {
    return (
      <div>
        <Box title="Trending Topics" api="https://rawgit.com/hugodias/9b6fc24f771da5ddfb41/raw/52b5590e8addad462a0367839880c835869de7fa/trending_topics.json" />
        <Timeline />
      </div>
    )
  }
});
