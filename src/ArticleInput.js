import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

import ReadingLevel from './ReadingLevel';
import './ArticleInput.css'

class ArticleInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      title: '',
      text: '',
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
    let { text, title, readability } = res.data;
    
    this.setState({
      text,
      title,
      readability,
      isSubmitted: true
    });
  }
//sm="12" md={{ size: 6, offset: 3 }}
  render() {
    const isSubmitted = this.state.isSubmitted;
    console.log('READABILITY', this.state.readability);
    
    return <div className='ArticleInput'>
      { isSubmitted ? (
          <React.Fragment>
            <ReadingLevel title={this.state.title} text={this.state.text} readability={this.state.readability}/>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="flex-container">
                <div className="row" >
                  <div className="flex-item">
                    <form onSubmit={this.handleSubmit}>
                      <label className="item">URL</label>
                      <input
                        className="input"
                        type="text"
                        value={this.state.url}
                        onChange={this.handleChange}
                      />
                      <button className="item" type="submit">
                      Submit
                      </button>
                    </form>
                  </div>
                </div>
             
            </div>
          </React.Fragment>
        )}
      
    </div>
  }
}

export default ArticleInput;