import React, { Component } from 'react';
//import './Routes.css';
// import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from './NotFound.js';
import Login from './Login.js';
import ReadingLevel from './ReadingLevel.js';
import ArticleInput from './ArticleInput.js';
import TextResult from './TextResult.js';
import NavBar from './NavBar.js';


class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readability: null // null if there is no score yet
    };

  }

  setReadability = (score) => {
    this.setState({
      readability: score
    }, () => {
      console.log('readability:', this.state.readability);
    });
  }

  render() {
      // console.log('ROUTE PROPS', this.props);
      return (
        <div className="Routes">
          <NavBar readability={this.state.readability}/>
          <Switch>
            <Route
              exact
              path="/login"
              render={() => <Login />}
            />
            <Route
              exact
              path="/reading-level"
              render={() => <ReadingLevel />}
            />
            <Route
              exact
              path="/"
              render={() => <ArticleInput setNavReadability={ this.setReadability }/>}
            />
            <Route
              exact
              path="/text-result/:article-id"
              render={() => <TextResult />}
            />
            <Route render={() => <NotFound />} />
            <Redirect to="/" />
          </Switch>
        </div>
      );
    }
  }


Routes.propTypes = {};

Routes.defaultProps = {};

export default Routes;