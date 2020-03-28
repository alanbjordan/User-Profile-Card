import React, { Component } from "react";

class UserCard extends Component {
  state = {

  };
  async componentDidMount() {
    try {
      const response = await fetch(`https://randomuser.me/api/?results=1`);
      const data = await response.json();
      // console.log(data.results[0]);
      this.setState({
        title: data.results[0].name.title,
        firstName: data.results[0].name.first,
        lastName: data.results[0].name.last,
        picture: data.results[0].picture.large,
        email: data.results[0].email,
        phone: data.results[0].phone
      });
    } catch (error) {
      console.error("Error", error);
      return error;
    }
  }
  
  render() {
    const stateValues = Object.values(this.state);
    return (
      <div>
        <img src={stateValues[3]}/>
        <p> {stateValues[0]}. {stateValues[2]} {stateValues[1]}</p>
        <p>{stateValues[4]}</p>  
        <p>{stateValues[5]}</p>
        <p>{stateValues[6]}</p>
      </div>
    );
  }
}

export default UserCard;