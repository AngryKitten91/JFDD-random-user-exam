import React, { Component } from 'react';
import './App.css';



const URL = 'https://randomuser.me/api/?results=10'

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
          <div>
            <p>{err.toString()}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="App" >
        {loading ?
          <div>Loading...</div>
          :
          <div>
            {
              users.map((user, id)=>{
                const {name:{first,last}, email} = user;
                console.log(user);
                
                return (
                  <div key={id} className="user">
                    <h3>{`${first} ${last}`}</h3>
                    <p>{email}</p>
                  </div>
                );
              })
            }
          </div>}

      </div>
    );
  }
}

