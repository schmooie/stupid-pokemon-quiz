import React from 'react';
import ChallengerCard from './challenger-card.jsx';

class ChallengerList extends React.Component {
  constructor() {
    super();
    this.state = { challengers: [1,2,3,4,5,6] };
  }

  render() {
    let challengerCards = null;

    if (this.state.challengers.length) {
      challengerCards = this.state.challengers.map((challenger, index) => {
        return (
          <ChallengerCard key={index} />
        )
      });
    }

    return (
      <div className="ui grid three columns stackable link cards">
        {challengerCards}
      </div>
    )
  }
}

export default ChallengerList;