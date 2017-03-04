import React from 'react';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {weather: null};
  }
  componentWillMount() {
    const url = 'http://api.openweathermap.org/data/2.5/weather?id=5391997&APPID=1ee429805388956488ab5e3d676cf630';
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.status == 200 && xhr.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(xhr.responseText);
        this.setState({weather: data});
        // console.log(this.state.weather.main.temp);
      }
    };
    xhr.open('GET', url, true);
    xhr.send();
  }

  render() {
    const temp = this.state.weather === null ? "null" : this.state.weather.main.temp;
    const weather = this.state.weather === null ? "null" : this.state.weather.weather.main;
    // debugger;
    return(
      <div>
        {weather}
        {temp}
      </div>
    );
  }
}

export default Weather;
//Key	Name	1ee429805388956488ab5e3d676cf630
//{"_id":5391997,"name":"San Francisco County","country":"US","coord":{"lon":-122.45108,"lat":37.766602}}
