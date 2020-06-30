import React, { Component } from 'react';

class TodoInput extends Component{
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    })
  }
  handleClick() {
    const inputValue = this.state.inputValue;
    this.props.addTodo(inputValue);
  }
  render() {
    return (
      <div>
        <input placeholder='新規TODOを入力してください' value={this.state.inputValue} onChange={this.handleChange} />
        <a href="/regster" onClick={this.handleClick}>登録</a>
      </div>
    )
  };
}
export default TodoInput;