import React from 'react';

class timerDisplay extends React.Component {
  render() {
    return (
      <div className='timer-display'>
        <span>
          {this.props.formatTime(this.props.currentTimeMin)}:
          {this.props.formatTime(this.props.currentTimeSec)}:
          {this.props.formatTime(this.props.currentTimeMs, 'ms')}
        </span>
      </div>
    );
  }
}

export default timerDisplay;
