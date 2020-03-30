import React from 'react';
import './Latest.styles.scss';
import Conora from '../../images/corona.png';

function Latestcard(props) {
  return (
    <div>
      <div className="tile">
        <div className="wrapper">
          <div className="header">Worldwide Statistics</div>

          <div className="banner-img">
            <img className="corona-image" src={Conora} alt="Image 1" />
          </div>

          <div className="dates">
            <div className="start">
              <strong>STARTED</strong> DECEMBER 2019
              <span></span>
            </div>
            <div className="ends">
              <strong>NOW</strong> {props.CoronaStastics.statistic_taken_at}
            </div>
          </div>

          <div className="stats">
            <div>
              <strong>TOTAL CASES</strong> {props.CoronaStastics.total_cases}
            </div>

            <div>
              <strong>Total Deaths</strong>
              {props.CoronaStastics.total_deaths}
            </div>

            <div>
              <strong>RECOVERED</strong> {props.CoronaStastics.total_recovered}
            </div>
          </div>

          <div className="stats">
            <div>
              <strong>NEW CASES</strong> {props.CoronaStastics.new_cases}
            </div>

            <div>
              <strong>NEW DEATHS</strong> {props.CoronaStastics.new_deaths}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Latestcard;
