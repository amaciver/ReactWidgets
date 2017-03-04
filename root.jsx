import React from 'react';

import Tabs from "./tabs";
import Clock from "./clock";
import Weather from "./weather";

const tabs = [
  { title: 'one',
    content: "i am the first" },
  { title: 'two',
    content: "i am the second" },
  { title: 'three',
    content: "i am the third" },
];

class Root extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div>
        <Tabs tabs={tabs} />
        <Clock />
        <Weather />
      </div>
    );
  }
}

export default Root;
