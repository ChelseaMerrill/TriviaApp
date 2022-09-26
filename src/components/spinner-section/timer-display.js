import React from 'react';

const TimerDisplay = () => {
    return (
      <div className='timer-display h-48 bg-orange-400'>
        <h1>timer-display</h1>
        {/* <span>
          {this.props.formatTime(this.props.currentTimeMin)}:
          {this.props.formatTime(this.props.currentTimeSec)}:
          {this.props.formatTime(this.props.currentTimeMs, 'ms')}
        </span> */}
      </div>
    );
  }

export default TimerDisplay;
