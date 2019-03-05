import React, { Component } from 'react';
import WordsList from './WordsList';
//import './ReadingLevel.css';
// import styled from 'styled-components';

class ReadingLevel extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      words: []
    };
  }

  // handleDoubleClick = (evt) => {
  //   console.log('EVT', evt.target);
  //   // this.setState({
  //   //   words: [...this.state.words, evt.target]
  //   // });
  // }

  render() {
    return <div className='ReadingLevel'> 
      <h1>{this.props.title}</h1>
      <h2>{this.props.readability}</h2>
      <p> {this.props.content} </p>
      {/* {this.state.words.length ?
        <WordsList words={this.state.words} /> : ''
      } */}
    </div>;
  }

  state = {};
}

ReadingLevel.propTypes = {};

ReadingLevel.defaultProps = {};

export default ReadingLevel;