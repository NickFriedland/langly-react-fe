import React, { Component } from 'react';
import axios from 'axios';
//import './ArticleInput.css';
// import styled from 'styled-components';

class ArticleInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (evt) => {
     // runs on every keystroke
    this.setState({url: evt.target.value});
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    console.log('URL in Article State', this.state.url)

    let res = await axios.post('http://localhost:3001/', {url: this.state.url});
    return res;
  }

  render() {
    return <div className='ArticleInput'>
      <h1>HOMEPAGE FOR LANGLY</h1>
      <form onSubmit={this.handleSubmit}>
          <label>URL</label>
          <input
            type="text"
            value={this.state.url}
            onChange={this.handleChange}
          />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  }
}

export default ArticleInput;