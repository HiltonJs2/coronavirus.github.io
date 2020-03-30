import React, { Component } from 'react';
import './home.component.scss';
import VirusLogo from '../../images/corona.png';
import SearchBox from '../../component/searchBar/searchBar.component';
import Latestcard from '../../component/Latetstcard/Latestcard.component';
class Home extends Component {
  state = {
    CoronaStastics: ''
  };

  async componentDidMount() {
    const api_call = await fetch(
      'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
          'x-rapidapi-key': '7b3a00791amsh404b33389843591p1ff7e7jsn384dc125dca8'
        }
      }
    );
    const data = await api_call.json();

    this.setState({
      CoronaStastics: data
    });
  }

  render() {
    return (
      <div className="container corona-container">
        <h1 className="text-center corona-heading">
          <u className="underline">COVID-19 UPDATES</u>
        </h1>
        <div className="row details-row">
          <div className="col-md-6 ">
            <SearchBox />
          </div>
          <div className="col-md-6 details details">
            <Latestcard CoronaStastics={this.state.CoronaStastics} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
