import React from 'react';
import './countryCard.styles.scss';

const CountryCard = props => {
  return (
    <div className="single category" key={props.stats.id}>
      <h3 className="side-title">Country Info</h3>
      <ul className="list-unstyled">
        <li>
          <a href="" title="">
            Country Name
            <span className="pull-right">{props.stats.country_name}</span>
          </a>
        </li>
        <li>
          <a href="" title="">
            Total Cases
            <span className="pull-right">{props.stats.total_cases}</span>
          </a>
        </li>
        <li>
          <a href="" title="">
            New Cases{' '}
            <span className="pull-right">{props.stats.new_cases}</span>
          </a>
        </li>
        <li>
          <a href="" title="">
            Active Cases
            <span className="pull-right">{props.stats.active_cases}</span>
          </a>
        </li>
        <li>
          <a href="" title="">
            Total Deaths
            <span className="pull-right">{props.stats.total_deaths}</span>
          </a>
        </li>
        <li>
          <a href="" title="">
            New Deaths{' '}
            <span className="pull-right">{props.stats.new_deaths}</span>
          </a>
        </li>
        <li>
          <a href="" title="">
            Total Recovered
            <span className="pull-right">{props.stats.total_recovered}</span>
          </a>
        </li>
        <li>
          <a href="" title="">
            Serious Critical
            <span className="pull-right">{props.stats.serious_critical}</span>
          </a>
        </li>
        <li>
          <a href="" title="">
            Total Cases Per Month{' '}
            <span className="pull-right">{props.stats.total_cases_per1m}</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default CountryCard;
