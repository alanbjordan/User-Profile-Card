import React, { Component } from "react";

class UserCard extends Component {
  state = {
    title: "Title",
    f_Name: "First Name",
    l_Name: "Last Name",
    pic: "pic",
    email: "email",
    phone: "phone"
  };
  async componentDidMount() {
    try {
      const response = await fetch(`https://randomuser.me/api/?results=1`);
      const data = await response.json();
      this.setState({
        title: data.results[0].name.t,
        f_Name: data.results[0].name.f,
        l_Name: data.results[0].name.l,
        pic: data.results[0].picture.large,
        email: data.results[0].email,
        phone: data.results[0].phone
      });
    } catch (error) {
      console.error("Error", error);
      return error;
    }
  }
  render() {
    const { title } = this.state;
    const { f_Name } = this.state;
    const { l_Name } = this.state;
    const { pic } = this.state;
    const { email } = this.state;
    const { phone } = this.state;
    return (
      <div>
        <div>
          <img src={pic} alt="pic"></img>
          <p>{title}</p>
          <p>{f_Name}</p>
          <p>{l_Name}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
    );
  }
}

export default UserCard;