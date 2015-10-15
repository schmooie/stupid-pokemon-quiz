import React from 'react';

class ChallengerCard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="ui card">
        <div className="image">
          <img src="http://lorempixel.com/200/200"/>
        </div>
        <div className="content">
          <div className="header">MISSINGNO?</div>
        </div>
      </div>
    )
  }
}

export default ChallengerCard;