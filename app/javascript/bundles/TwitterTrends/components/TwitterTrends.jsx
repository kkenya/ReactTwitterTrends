import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import YouTube from 'react-youtube';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

class YouTubePlayer extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <div>
        <YouTube
          videoId="3GddCIGLrp8"
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }

  _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
}

class Trends extends Component {
  constructor(props) {
    super(props);
    this.state = { trends: this.props.trends };
    console.log(this.props.trends);
  }

  render() {
    const trends = [];
    this.state.trends.map((item) => {
      trends.push(<li key={item}>{item}</li>);
    });
    return (
      <div>
        <h1>Twitter Trends</h1>
        <ul>
          <li>{trends}</li>
        </ul>
      </div>
    );
  }
}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
);

class TwitterTrends extends Component {
  constructor(props) {
    super(props);
    this.state = { trends: this.props.trends };
    console.log(this.props.trends);
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/trends">Trends</Link></li>
            <li><Link to="/youtube">Youtube</Link></li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/topics" component={Topics} />
          <Route path="/trends" component={Trends} />
          <Route path="/youtube" component={YouTubePlayer} />
        </div>
      </Router>
    );
  }
}

export default TwitterTrends;
