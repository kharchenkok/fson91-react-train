import React, { PureComponent } from 'react';

export default class Tabs extends PureComponent {
  state = {
    activeTabIdx: 0,
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.activeTabIdx !== this.state.activeTabIdx;
  // }

  setActiveTabIdx = (index) => {
    this.setState({ activeTabIdx: index });
  };

  render() {
    console.log(`Re-render @ ${Date.now()}`);

    const { activeTabIdx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIdx];

    return (
      <>
        <div>
          {items.map((item, index) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActiveTabIdx(index)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </>
    );
  }
}
