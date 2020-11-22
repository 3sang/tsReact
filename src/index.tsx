import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';

interface Istate {
  /** Onsubmit传过来input里的内容 */
  text: string;
}
class Index extends Component<any, Istate> {
  constructor(props: any) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onSubmit = (text: string) => {
    this.setState({ text });
  };

  render() {
    return (
      <div style={{ width: '70%', height: '70%', margin: '0 auto', border: '1px solid #aaa', padding: '20px' }}>
        <App title="TodoList" onSubmit={this.onSubmit} />
        {this.state.text}
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
