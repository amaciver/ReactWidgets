import React from 'react';

class Clock extends React.Component {
  constructor(){
    super();
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);

  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    this.intervalId = 0;
  }



  render() {
    // console.log(this.state.time.toTimeString());
    return (
      <div className = "clock">
        <p>{this.state.time.toTimeString()}</p>
        <p>{this.state.time.toDateString()}</p>
      </div>
    );
  }
}

export default Clock;
