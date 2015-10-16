import React from 'react';
import ChallengerCard from './challenger-card.jsx';
import { chunkArr } from '../utilities.js';

class ChallengerList extends React.Component {
  constructor() {
    super();
    this.state = { challengers: [1,2,3,4,5,6] };
  }

  render() {
    let challengerCards = null;

    if (this.state.challengers.length) {
      let challengerRows = chunkArr(this.state.challengers, 2);

      challengerCards = challengerRows.map((row, index) => {
        return (
          <div className="row" key={index}>
            <div className="col-xs-6">
              <ChallengerCard />
            </div>
            <div className="col-xs-6">
              <ChallengerCard />
            </div>
          </div>
        )
      });
    }

    return (
      <div className="challenger-list">
        {challengerCards}
      </div>
    )
  }
}

export default ChallengerList;