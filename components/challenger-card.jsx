import React from 'react';

class ChallengerCard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="challenger-card card">
        <img className="card-img-top" src="/images/MissingNo..png"/>
        <div className="card-block">
          <div className="card-title">MISSINGNO.</div>
        </div>
      </div>
    )
  }
}

export default ChallengerCard;