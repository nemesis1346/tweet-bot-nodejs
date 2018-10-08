import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import AddTweetPage from './components/pages/AddTweetPage';
import TweetListPage from './components/pages/TweetListPage';
import SettingsPage from './components/pages/SettingsPage';
import MainPage from './components/pages/MainPage';
class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Route path="/" exact component={MainPage} />
        <Route path='/addTweet' exact component={AddTweetPage} />
        <Route path="/listTweets" exact component={TweetListPage} />
        <Route path="/settings" exact component={SettingsPage} />
      </div>
    )
  }
}
export default App;
