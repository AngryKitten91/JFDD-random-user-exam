import React, { Component } from 'react';





export default class User extends Component {

  constructor(props) {
    super(props)

  }


  render() {
    const {first,last,email,medium,id } = this.props.user;


    return (
      <div key={id} className="user">
        <div>
          <h3 className="name">{`${first} ${last}`}</h3>
          <p>{email}</p>
        </div>
        <div>
          <img className="img" src={medium} />
        </div>
      </div>
    );
  }
}

