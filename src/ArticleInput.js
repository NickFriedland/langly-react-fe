import React, { Component } from 'react';
import axios from 'axios';

import ReadingLevel from './ReadingLevel';

class ArticleInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      title: '',
      content: '',
      readability:'',
      isSubmitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (evt) => {
     // runs on every keystroke
    this.setState({url: evt.target.value});
  }

  async handleSubmit(evt) {
    evt.preventDefault();

    let res = await axios.post('http://localhost:3001/', {url: this.state.url});
    
    this.setState({
      content: res.data.content,
      title: res.data.title,
      readability: res.data.readability,
      isSubmitted: true
    });
  }

  render() {
    const isSubmitted = this.state.isSubmitted;
    console.log('READABILITY', this.state.readability);
    
    return <div className='ArticleInput'>
      { isSubmitted ? (
          <React.Fragment>
            <ReadingLevel title={this.state.title} content={this.state.content} readability={this.state.readability}/>
          </React.Fragment>
        ) : (
          <React.Fragment>
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
          </React.Fragment>
        )}
      
    </div>
  }
}

export default ArticleInput;