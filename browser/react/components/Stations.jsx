import React from 'react';
import {Link} from 'react-router-dom'
const DUMMY_STATIONS_DATA = [
    { name: '90s Hip Hop' },
    { name: 'Death Metal' },
    { name: 'Classical' }
  ];

  export default (props) => {
    const stations = props.stations;
    return (
      <div>
        <h3>Stations</h3>
        <div className="list-group">
        {
          Object.keys(stations).map(genre => {
            return (
              <div className="list-group-item" key={genre}>
                <Link to={`/stations/${genre}`}>{genre}</Link>
              </div>
            );
          })
        }
        </div>
      </div>
    );
  }