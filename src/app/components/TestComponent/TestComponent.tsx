import * as React from 'react';

export default class TestComponent extends React.Component {
  componentDidMount() {}

  UNSAFE_componentWillReceiveProps(nextProps) {}

  render() {
    return 'It Works';
  }
}
