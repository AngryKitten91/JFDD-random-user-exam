import React, { Component } from 'react';


export default class User extends Component {

  
  render() {
    const {first,last,email,medium} = this.props.user;


    return (
      <div className="user">
        <div>
          <h3 className="name">{`${first} ${last}`}</h3>
          <p>{email}</p>
        </div>
        <div>
          <img alt={medium} className="img" src={medium} />
        </div>
      </div>
    );
  }
}

