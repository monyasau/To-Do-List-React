import { Component } from "react";
import InputField from "../components/InputBox";
import ListContainer from "../components/TodoList";

export default class TodoApp extends Component {
  constructor() {
    super();

    this.state = {
      // items: Array.from(JSON.parse(localStorage.getItem("tasks"))),
      tasks: [
        {
          taskValue: "task1",
          id: this.uuid(),
          time: new Date().toLocaleDateString(),
        },
        {
          taskValue: "task2",
          id: this.uuid(),
          time: new Date().toLocaleDateString(),
        },
        {
          taskValue: "task3",
          id: this.uuid(),
          time: new Date().toLocaleDateString(),
        },
      ],
      input: "",
    };
  }
  delTask = (e) => {
    let taskArray = this.state.tasks;
    let id = e.target.getAttribute("id");
    console.log(id);

    
  };
  uuid = (len) => {
    let length = len || 3;
    let charCodes = [];
    let string = "";

    for (let i = 0; i < 10; i++) {
      charCodes.push(48 + i);
      charCodes.push(97 + i);
    }
    for (let i = 0; i < 16; i++) {
      charCodes.push(107 + i);
    }

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * charCodes.length);
      string = string + String.fromCharCode(charCodes[charIndex]);
    }

    return string;
  };

  handleInput = (e) => {
    if (e.keyCode === 13) {
      if (!(this.state.input === "")) {
        this.addItem(this.state.input);
        e.target.value = "";
        this.setState({
          input: "",
        });
      }
    } else {
      this.setState({ input: e.target.value });
    }
  };
  // clickAddItem = ()=>{}
  addItem() {
    let curInput = this.state.input;
    let newTaskObject = [
      {
        taskValue: curInput,
        id: this.uuid(),
        time: new Date().toLocaleDateString(),
      },
    ];
    this.setState({
      tasks: this.state.tasks.concat(newTaskObject),
    });
  }
  componentDidMount() {
    document.addEventListener("keyup", (e) => {
      this.handleInput(e);
    });
  }
  render() {
    return (
      <>
        <div>
          <InputField onInput={this.handleInput} />
        </div>
        <div>
          <button type="submit" onClick={this.addItem}>
            ADD
          </button>
        </div>

        <div>
          <ListContainer taskDel={this.delTask} tasks={this.state.tasks} />
        </div>
        <div>{this.state.tasks.length}</div>
      </>
    );
  }
}
