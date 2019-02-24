import React, { Component } from 'react';
//import './ReadingLevel.css';
// import styled from 'styled-components';

class ReadingLevel extends Component {
  
  constructor(props) {
    super(props);

    this.state = {title: this.props.title,
                  content: this.props.content,
                  readability: this.props.readability
                 };
  }

  

  render() {
    return <div className='ReadingLevel'> 
      <h1>{this.state.title}</h1>
      <p>{this.state.readability}</p>
      <p>{this.state.content}</p>
    </div>;
  }

  state = {};
}

ReadingLevel.propTypes = {};

ReadingLevel.defaultProps = {};

export default ReadingLevel;