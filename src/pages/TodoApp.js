import { Component } from "react";
import InputField from "../components/InputField";
import TodoList from "../components/TodoList";

export default class TodoApp extends Component {
  constructor() {
    super();

    this.state = {
      // items: Array.from(JSON.parse(localStorage.getItem("tasks"))),
      tasks: [
        {
          taskValue: "Get groceries",
          id: this.uuid(),
          time: new Date().toLocaleDateString(),
        },
        {
          taskValue: "Gym",
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
    /*{
          // let index = taskArray.indexOf(e)
          let valueBeforeIndex = taskArray.slice(0, i-1);
          let ValueAfterIndex = taskArray.slice(i + 1);
          let editedArray =  [...valueBeforeArray, ...valueAfterArray];
        // console.log(index);
        // taskArray.map((list, i) => {
        //   if (taskArray[i].id === id) {
        //     console.log(i);
            
        //     this.setState({
        //       taskArray: editedArray,
        //     });
        //   }
        // });

    }*/
    var filteredItems = this.state.tasks.filter(function (i) {
      return i.id !== id;
    });
    this.setState({
      tasks: filteredItems,
    });
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
  clickAddItem = (e) => {
    let curInput = this.state.input;
    let newTaskObject = [
      {
        taskValue: curInput,
        id: this.uuid(),
        time: new Date().toLocaleDateString(),
      },
    ];
    if (!(this.state.input === "")) {
      this.setState({
        tasks: this.state.tasks.concat(newTaskObject),
      });

      document.querySelector("input").value = "";
      this.setState({
        input: "",
      });
    }
  };

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
        <div className="border border-dark app-body mx-auto p-2 d-md-flex">
          <div>
            <InputField onInput={this.handleInput} />
            <button type="submit" onClick={this.clickAddItem}>
              ADD
            </button>
          </div>

          <div>
            <TodoList taskDel={this.delTask} tasks={this.state.tasks} />
          </div>
          <div>you have {this.state.tasks.length} task</div>
        </div>
      </>
    );
  }
}
