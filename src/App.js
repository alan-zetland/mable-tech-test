import React, { Component } from 'react';
import UserSearchForm from './components/user-search-form.js';
import UserDetails from './components/user-details.js';
import RecentActivity from './components/recent-activity.js';
import UserRepos from './components/user-repos.js';

import './custom.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {}
    };
  }
  handleUpdateUser = userData => {
    console.log('updating user in App');
    this.setState({ 
      userData: userData
     });

  }

  render() {
    return (
      <div className="app">
      <h1>GitHub User Search</h1>
        <UserSearchForm updateUser={this.handleUpdateUser}/>
        {Object.keys(this.state.userData).length > 0 ? (
          <div className="user-information">
            <UserDetails userData={this.state.userData}/>
            <RecentActivity userId={this.state.userData.login}/>
            <UserRepos userId={this.state.userData.login}/>
          </div>
        ) : (
          <p>Search for a user to display their details</p>
        )}
      </div>
    );
  }
}

export default App;
