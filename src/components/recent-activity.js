import React, { Component } from "react";
import axios from "axios";
import moment from 'moment'

class RecentActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
          events: []
        };
      }

      componentDidMount = () => {
        console.log('mounted');
        this.getActivity(this.props.userId);
      }

      componentDidUpdate = (prevProps) => {
        if(prevProps.userId !== this.props.userId)
        {
          this.getActivity(this.props.userId);
        }
      }

      getActivity = (userId) => {
        axios.get(`https://api.github.com/users/${userId}/events`).then(resp => {
          console.log('result', resp.data);
          this.setState({ events: resp.data });
        })
      }

  render() {
    return (
      <div className="user-recent-activity">
      <h3>Recent Activity</h3>
      <div className="activity-table">
        {this.state.events.map((event, index) => (
            <div key={index} className="activity-table__activity">
              <div className="font-weight-bold">{moment(new Date(event.created_at)).format("DD-MM-YYYY hh:mm")}</div>
              <div>{event.repo.name}</div>
              <div className="font-italic">{event.type}</div>
            </div>
        ))}

      </div>
      </div>
    );
  }
}

export default RecentActivity;



