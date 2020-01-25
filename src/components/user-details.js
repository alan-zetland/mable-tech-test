import React, { Component } from "react";

class UserDetails extends Component {
  render() {
    return (
      <div className="user-details">
        <h3>User Details</h3>
        <div className="user-details-panel">
          <div className="avatar">
            <img src={this.props.userData.avatar_url} alt=""/>
          </div>
          <div className="user-details">
            <div className="details">
              Login: {this.props.userData.login}
            </div>
            <div className="details">
              Name: {this.props.userData.name}
            </div>
            <div className="details">
              Url: {this.props.userData.html_url}
            </div>
            <div className="details">
              Repositories: {this.props.userData.public_repos}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDetails;



