import { Component } from "react";

export default class TodoApp extends Component {
    constructor(){
        super();

        this.state = {
            previousTasks: "",
            checkedTasks: ""
        }
    }
  render() {
    return (
    <>
    <input type="text" placeholder="New task"/>
    <input type="submit" value="add"/>
    </>
    );
  }
}
