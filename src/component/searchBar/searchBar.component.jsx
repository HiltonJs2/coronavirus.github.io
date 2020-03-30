import React from 'react';
import './searchbar.syles.scss';
import { Component } from 'react';
import CountryCard from '../countryCard/countryCard.component';
class SearchBar extends Component {
  state = {
    stats: {},
    query: ''
  };
  handleChange = e => {
    this.setState({
      query: e.target.value
    });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const api_call = await fetch(
      `https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=${this.state.query}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
          'x-rapidapi-key': '7b3a00791amsh404b33389843591p1ff7e7jsn384dc125dca8'
        }
      }
    );
    const data = await api_call.json();
    console.log(data.latest_stat_by_country[0]);
    this.setState({
      stats: data.latest_stat_by_country[0]
    });
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h1 className="h1-heading text-center">Search Country</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <form
              className="form-inline my-2 my-lg-0 text-center"
              onSubmit={this.handleSubmit}
            >
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.handleChange}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0 button-search"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <CountryCard stats={this.state.stats} />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
