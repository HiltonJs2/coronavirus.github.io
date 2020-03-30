import React from 'react';
import './countryCard.styles.scss';

const CountryCard = props => {
  return (
    <div class="single category" key={props.stats.id}>
      <h3 class="side-title">Country Info</h3>
      <ul class="list-unstyled">
        <li>
          <a href="" title="">
            Country Name
            <span class="pull-right">{props.stats.country_name}</span>
          </a>
        </li>
        <li>
          <a href="" title="">
            Total Cases
            <span class="pull-right">{props.stats.total_cases}</span>
          </a>
        </li>
        <li>
          <a href="" title="">
            New Cases <span class="pull-right">{props.stats.new_cases}</span>
          </a>
        </li>
        <li>
          <a href="" title="">
            Active Cases
            <span class="pull-right">{props.stats.active_cases}</span>
          </a>
        </li>
        <li>
          <a href="" title="">
            Total Deaths
            <span class="pull-right">{props.stats.total_deaths}</span>
          </a>
        </li>
        <li>
          <a href="" title="">
            New Deaths <span class="pull-right">{props.stats.new_deaths}</span>
          </a>
        </li>
        <li>
          <a href="" title="">
            Total Recovered
            <span class="pull-right">{props.stats.total_recovered}</span>
          </a>
        </li>
        <li>
          <a href="" title="">
            Serious Critical
            <span class="pull-right">{props.stats.serious_critical}</span>
          </a>
        </li>
        <li>
          <a href="" title="">
            Total Cases Per Month{' '}
            <span class="pull-right">{props.stats.total_cases_per1m}</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default CountryCard;
