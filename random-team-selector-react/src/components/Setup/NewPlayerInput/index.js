import React, { Component } from 'react';
import './styles.css';

export class NewPlayerInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  handleOnNameChange(name) {
    this.setState({
      name: name
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    if (this.state.name !== '')
      this.props.onAddPlayer(this.state.name);
    this.setState({
      name: ''
    });
  }

  render() {
    return (
      <form className="addingPlayers" onSubmit={(e) => this.handleOnSubmit(e)}>
        <input
          type="text"
          id="input"
          placeholder="New Player..."
          value={this.state.name}
          onChange={(e) => this.handleOnNameChange(e.target.value)} />
        <input
          type="submit"
          id="submit"
          value="+" />
      </form>
    );
  }
}