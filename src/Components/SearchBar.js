import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onInputChange = (event) => {
    console.log(this.state.searchTerm);
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.searchTerm);
    this.props.onFormSubmit(this.state.searchTerm);
  };

  isButtonDisabled = () => {
    if(this.state.searchTerm!=="")
    return false;
    return true;
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <span className="field">
            <label>Search Video</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            />
             </span>
             <span>
            <button className="ui primary button" type="submit" disabled={this.isButtonDisabled()}><i className="search icon"></i></button>
          </span>
        </form>
      </div>
    );
  }
}

export default SearchBar;
