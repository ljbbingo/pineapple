import React from 'react';
// import { observer } from 'mobx-react';

// @observer
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Hello Pineapple！',
    };
  }

  render() {
    const { content } = this.state;
    return <div>{content}</div>;
  }
}
export default Home;
