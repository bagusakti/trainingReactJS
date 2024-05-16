import { Component } from "react";
//Membuat Class untuk Welcome Text
class Home extends Component {
    render() {
      return (
        <div>
          <div>Hello World Class {this.props.name}?</div>
        </div>
      )
    }
  }
export default Home;


