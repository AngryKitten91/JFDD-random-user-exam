import React, { Component } from 'react';
import './App.css';


import User from 'components/User';


const URL = 'https://randomuser.me/api/?results=10';



const fetchUsers = (url) => {
  return fetch(url)
    .then(resp => resp.json())
}



export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: [],
      loading: true,
      err: null
    }
  }

  componentDidMount() {

    fetchUsers(URL)
      .then(({ results }) => {
        this.setState({
          users: results,
          loading: false
        })
      })
      .catch(err => {
        this.setState({
          err,
          loading: false
        })
      })
  }

  render() {
    const { users, loading, err } = this.state;

    if (err) {
      return (
        <div className="App" >
          <div className="error">
            <p>{err.toString()}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="App" >
        {loading ?
          <div className="loading">Loading...</div>
          :
          <div>
            {
              users.map((user, id) => {
                const { name: { first, last }, email, picture: { medium } } = user;

                return (
                  <User key={id} user={{ first, last, email, medium }} />
                );
              })
            }
          </div>}

      </div>
    );
  }
}

