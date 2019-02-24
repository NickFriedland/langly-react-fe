import React, { Component } from 'react';
import axios from 'axios';

import ReadingLevel from './ReadingLevel';

//import './ArticleInput.css';
// import styled from 'styled-components';

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
    // console.log('URL in Article State', this.state.url)

    // Make post request to express and store the response 
    let res = await axios.post('http://localhost:3001/', {url: this.state.url});
    
    // Mock response will change to res when we figure out the CORs problems.
    const mockResponse = {
      author: "Jeremy Mack",
      content: "Those guys are inside you building a piece of shit Ethan! They're inside you building a monument to compromise! Fuck them, fuck those people, fuck this whole thing Ethan. Get off the high road Summer. We all got pink eye because you wouldn't stop texting on the toilet. Rick, is this a Saw thing? Are you seriously Sawing the Vindicators? I love morty and i hope morty loves me. I want to wrap my arms around him and feel him deep inside me. Wow, so your origin is what? You fell into a vat of redundancy? Come on, flip the pickle, Morty. You're not gonna regret it. The payoff is huge. We're gonna nine eleven this bitch unless Morty gets better math grades! It's a figure of speech, Morty! They're bureaucrats! I don't respect them. Just keep shooting, Morty! You have no idea what prison is like here! Then it's time to get your beak wet tonight playa! Your failures are your own, old man! I say, follow throooough! Listen, Morty, I hate to break it to you but what people call love is just a chemical reaction that compels animals to breed. Don't Morty me! I tricked Rick into taking Dad on an adventure because I thought I could get a break from this kind of shit! But no! Like father, like goddamn daughter! You wanna be like Rick?! Congratulations! You're just as arrogant and just as irresponsible! Want to piss on him? Nobody's killing me until after I catch my wife with another man. Ohh, fuck! Your blood will be my lotion! You gotta shove these seeds way up your butt Morty, waay up there. Thanks Noob Noob, this guy gets it. 'And'? What more do you want tacked on to this? I turned myself into a pickle, and 9/11 was an inside job?' Yea and I made the stars that became the carbon in your mothers ovaries! ",

      date_published: "2016-10-03T16:48:58.000Z",
      dek: null,
      direction: "ltr",
      domain: "trackchanges.postlight.com",
      excerpt: "Awesome CMS is…an awesome list of awesome content management systems, grouped by language and ordered by popularity. It’s on GitHub, so anyone can add to ...",
      lead_image_url: "https://postlight.com/wp-content/uploads/2016/10/03-building-awesome-cms-0.png",
      next_page_url: null,
      rendered_pages: 1,
      title: "Building Awesome CMS — Postlight — Digital product studio",
      total_pages: 1,
      url: "https://trackchanges.postlight.com/building-awesome-cms-f034344d8ed",
      word_count: 465,
      readability: "C2"
    }


    // Store the content, title and readability score to pass into ReadingLevel
    // Also change the value of isSubmitted to render ReadingLevel

    this.setState({
      content: res.content,
      title: res.title,
      readability: res.readability,
      isSubmitted: true
    });
  }

  render() {
    const isSubmitted = this.state.isSubmitted;
    
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