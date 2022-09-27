import React from 'react';

class TimerDisplay extends React.Component{
  render(){
    return (
      <div className='timer-display h-48 bg-orange-400'>
        <span>
          {this.props.formatTime(this.props.currentTimeMin)}:
          {this.props.formatTime(this.props.currentTimeSec)}:
          {this.props.formatTime(this.props.currentTimeMs, 'ms')}
        </span>
      </div>
    );
  }
}

export default TimerDisplay;
