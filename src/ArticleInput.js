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
  }

  handleChange(evt) {
     // runs on every keystroke
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();

    let res = await axios.post('http://localhost:3001/', this.state.url);
    return res;
    // console.log('HERE');

    // Mercury.parse(this.state.url).then(result => console.log(result));
  }

  render() {
    return <div className='ArticleInput'>
      <h1>HOMEPAGE FOR LANGLY</h1>
      <form onSubmit={this.handleSubmit}>
          <label>URL</label>
          <input
            name="url"
            type="text"
            onChange={this.handleChange}
            value={this.state.url}
          />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  }
}

export default ArticleInput;