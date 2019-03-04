import React, { Component } from 'react';

class WordsList extends Component {

  render() {
    return <div>
      <ul>
        {this.props.words.map(word => 
          <li>
            {word}
          </li>
          )}
      </ul>
    </div>
  }
}

// WordsList.propTypes = {};

// WordsList.defaultProps = {};

export default WordsList;