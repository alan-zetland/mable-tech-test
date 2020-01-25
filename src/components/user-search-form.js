import React, { Component } from "react";
import axios from "axios";

class UserSearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            userMessage: ""
        };
      }

      handleSubmit = event => {
        event.preventDefault()
    
        axios.get(`https://api.github.com/users/${this.state.userName}`).then(resp => {
          this.props.updateUser(resp.data);
        })
        .catch(error => {
          this.setState({ userMessage: `No user found matching: ${this.state.userName}` });
        })
      }

      resetForm = () => {
        document.getElementById('user').value = '';
        this.setState({ 
          userName: '',
          userMessage: ''
         });
         this.props.updateUser({});
      }

  render() {
    return (
      <div className="user-search-form">
        <form onSubmit={this.handleSubmit} className="form-inline" id="user-search-form">
        <input
          id="user"
          type="text"
          value={this.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="Enter Github user name"
          className="form-control"
          required
        />
        <button type="submit" className="btn btn-primary">Go</button><button type="button" onClick={this.resetForm} className="btn btn-warning">Reset</button>
        <div>{this.state.userMessage}</div>
      </form>
    </div>
    );
  }
}

export default UserSearchForm;



