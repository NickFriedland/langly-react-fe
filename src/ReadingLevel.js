import React, { Component } from 'react';
// import WordsList from './WordsList';
import Highlightable, 
  { ranges, 
    onTextHighlightedCallback, 
    uniqueId, 
    onMouseOverHighlightedWordCallback
  } from 'highlightable';
//import './ReadingLevel.css';

class ReadingLevel extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      words: []
    };
  }

  render() {
    return <div className='ReadingLevel'>
      <div className='container'>
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.readability}</h2>
        </div>
        <div>
          {/* {this.props.text.split('\n').map(t => <p>{t}</p>)} */}
          <Highlightable ranges={ranges}
            enabled={true}
            onTextHighlighted={onTextHighlightedCallback}
            id={uniqueId}
            onMouseOverHighlightedWord={onMouseOverHighlightedWordCallback}
            highlightStyle={{
              backgroundColor: '#ffcc80'
            }}
            text = {'some text here to test'}
            // text = {this.props.text}
          />
          {/* {this.state.words.length ?
            <WordsList words={this.state.words} /> : ''
          } */}
        </div>
      </div> 
    </div>;
  }

  state = {};
}

ReadingLevel.propTypes = {};

ReadingLevel.defaultProps = {};

export default ReadingLevel;