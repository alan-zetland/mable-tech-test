import React, { Component } from "react";
import axios from "axios";
import moment from 'moment'

class UserRepos extends Component {
    constructor(props) {
        super(props);
        this.state = {
          repos: []
        };
      }

      componentDidMount = () => {
        this.getRepos(this.props.userId);
      }

      componentDidUpdate = (prevProps) => {
        if(prevProps.userId !== this.props.userId)
        {
          this.getRepos(this.props.userId);
        }
      }

      getRepos = (userId) => {
        axios.get(`https://api.github.com/users/${userId}/repos`).then(resp => {
          this.setState({ repos: resp.data });        })
      }


  render() {
    return (
      <div className="user-repos">
      <h3>User Repositories ({this.state.repos.length})</h3>
      <div className="repos">
      {this.state.repos.map((repo, index) => (
          <div key={index} className="repo">
            <div className="font-weight-bold">
            Name: {repo.name}
              {repo.private &&
                <span>(Private)</span>
              }
            </div>
            <div><a href={repo.html_url} target="_blank">{repo.html_url}</a></div>
            <div>Last updated: {moment(new Date(repo.updated_at)).format("DD-MM-YYYY hh:mm")}</div>
            <div className="font-italic">{repo.description}</div>
          </div>
      ))}

      </div>
      </div>
    );
  }
}

export default UserRepos;



