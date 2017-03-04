import React from 'react';

class Tabs extends React.Component{
  constructor(prop) {
    super();
    this.state = {tabs: prop.tabs, tab: 0};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(idx) {
    return (e) => {
      this.setState({tab: idx});
    };
  }

  render() {
    const tabs = this.state.tabs.map( (tab, idx) => {
      return (
          <h1 key={idx} onClick={this.handleClick(idx)}>{tab.title}</h1>
      );
    });

    const content = (this.state.tabs[this.state.tab].content);

    return (
      <div>
        <ul className="tab-header">
          {tabs}
        </ul>
        <article className="tab-content">
          {content}
        </article>
      </div>
    );
  }
}

export default Tabs;
