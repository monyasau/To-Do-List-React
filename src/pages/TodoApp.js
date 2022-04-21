import { Component } from "react";
import InputField from "../components/InputField";
import ListContainer from "../components/ListContainer";

export default class TodoApp extends Component {
  constructor() {
    super();

    this.state = {
      items: Array.from(JSON.parse(localStorage.getItem("tasks"))),
      inputField: "",
    };
  }
  handleInput = (event) => {
    this.setState({ inputField: event.target.value });
    console.log(this.state.inputField);
  };
  addItem(InputField) {
  
  }
  // addItem = (event) => {
  //   // this.setState({
  //   //   items: this.state.items + event.key,
  //   // });
  // };
  componentDidMount() {
    document.addEventListener("keyup", (event) => {
      this.addItem(event);
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
          <ListContainer
            items={this.state.items}
            previousState={this.state.previousState}
          />
        </div>
      </>
    );
  }
}
