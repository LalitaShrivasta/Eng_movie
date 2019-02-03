import React from 'react';
import axios from 'axios';
// import Suggestions from './suggestion';
import {searchBarStyle} from './style';
// import {titleStyle} from './style';
// import SearchIcon from '@material-ui/icons/Search';
import Input from './commit.js';

const api = `http://192.168.43.209:8000/get_movie_of`;

// create a Component who's name is search which is extend in component
export class Search extends React.Component {
  // set a state of the component query where when user do the query it store in it, result were hold the result of query
  state = {
    query: '', // define a state of query
    results: [], // define a state of results
  };
  // getInfo is function here which is get the result of the query and then pass the result data to the
  //state in the result array.
  componentDidMount () {
    axios.get (`http://192.168.43.209:8000/get_movie_of`).then (res => {
      const results = res.data;
      this.setState ({results});
    });
  }

  // here input handler is a function who set the states value and pass the query to state
  inputHandler = event => {
    this.setState ({
      query: event.target.value,
    });
  };
  // };
  // we make a title and search box for query when it get the query it pass it to the inputHandler function.
  render () {
    const {results} = this.state;
    console.log (results);
    const {query} = this.state;
    const filtermethod = results.filter (data => {
      if (
        data.movie_title.toLowerCase().indexOf (query.toLowerCase ()) == -1
      ) {
        return true;
      } else {
        return false;
      }
    });

    return (
      <div>
        <h1 style={{color: 'white'}}> search Your Favourite English Movie</h1>
        {/* <h1>giu</h1> */}
        <form>
          {/* <h1 style={titleStyle}>Movie</h1> */}
          <input
            style={searchBarStyle}
            type="text"
            placeholder="Search movie ......."
            ref={input => (this.search = input)}
            onChange={this.inputHandler}
          />
          {/* <Suggestions results={this.state.results} /> */}
        </form>
        {filtermethod.slice (0, 10).map (function (items, index) {
          return (
            <div key={index} style={{color: 'white'}}>
              <div>{items.movie_title}</div>
              <div>{items.director_name}</div>
              <div>{items.movie_duration}</div>
              <div>{items.title_year}</div>
            </div>
          );
        })}
        <Input />
      </div>
    );
  }
}
export default Search;
