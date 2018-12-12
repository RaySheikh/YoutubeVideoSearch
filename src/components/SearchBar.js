import React from 'react';

class SearchBar extends React.Component{

  state={term: ''}

  onFormSubmit = event => {
    event.preventDefault();

    //callback from parent component
    this.props.onTermSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment" style={{backgroundColor:"lightblue"}}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field ui fluid icon input">
            <input 
            className="prompt"
            type="text" 
            value={this.state.term} 
            onChange={e => this.setState({term: e.target.value})}
            placeholder="Search video"
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
