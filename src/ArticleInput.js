import React, { Component } from 'react';
//import './ArticleInput.css';
// import styled from 'styled-components';

class ArticleInput extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(evt) {
     // runs on every keystroke
    this.setState({
      fullName: evt.target.value
    });
  }

  render() {
    return <div className='ArticleInput' />;
  }

  state = {};
}

ArticleInput.propTypes = {};

ArticleInput.defaultProps = {};

export default ArticleInput;