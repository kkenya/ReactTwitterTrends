import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import YouTube from 'react-youtube';
//import { Base64 } from 'js-base64';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

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
      <li>
        <Link to={`${match.url}/youtube`}>
          YouTube Player
        </Link>
        <Route path={`${match.url}/youtube`} component={YouTubePlayer} />
      </li>
      <li>
        <Link to={`${match.url}/twitter`}>
          Twitter
        </Link>
        <Route path={`${match.url}/twitter`} component={TwitterTrends} />
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )} />
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
        <TwitterTrends />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

class TwitterTrends extends Component {
  componentDidMount() {
    const METHOD = 'GET';
    const BASE_URL = "https://api.twitter.com/1.1/trends/place.json";
    const WOEID = "1118370";
    const BEARER_TOKEN = '';

    fetch(`${BASE_URL}?id=${WOEID}`, {
      credentials: 'include',
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
      mode: 'cors',
      method: METHOD,
    })
      .then(response => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <h1>Twitter Trends</h1>
    );
  }
}

//class PostBear extends Component {
//  componentDidMount() {

//    const METHOD = 'POST';
//    const BASE_URL = 'https://api.twitter.com/oauth2/token';
//    const CREDENTIALS = `${encodeURIComponent(CONSUMER_KEY)}:${encodeURIComponent(CONSUMER_SECRET)}`;
//    const BASE64_CREDENTIALS = Base64.encode(BEARER_TOKEN);
//
//    fetch(BASE_URL, {
//      headers: {
//        'Authorization': `Basic ${BASE64_CREDENTIALS}`,
//        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
//      },
//      mode: 'cors',
//      method: METHOD,
//      body: 'grant_type=client_credentials',
//    })
//      .then(response => {
//        console.log(response);
//        if (response.ok) {
//          return response.json();
//        }
//        throw new Error('Network response was not ok');
//      })
//      .then(json => console.log(json))
//      .catch(error => console.log(error));
//  }
//
//  render() {
//    return (
//      <h1>Twitter Trends</h1>
//    );
//  }
//}

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

export default BasicExample;
