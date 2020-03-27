import React, { Component } from "react";

class UserCard3 extends Component {
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
      console.log(data.results[0].name.title);
      this.setState({
        title: data.results[0].name.title,
        f_Name: data.results[0].name.first,
        l_Name: data.results[0].name.last,
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
          <p>{title} {f_Name} {l_Name} </p>
          <p>E|{email}</p>
          <p>P|{phone}</p>
        </div>
      </div>
    );
  }
}

export default UserCard3;