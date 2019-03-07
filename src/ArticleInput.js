import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

import ReadingLevel from './ReadingLevel';

class ArticleInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      title: '',
      text: '',
      readability:'',
      html: '',
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
            <Container>
              <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
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
                </Col>
             </Row>
            </Container>
          </React.Fragment>
        )}
      
    </div>
  }
}

export default ArticleInput;