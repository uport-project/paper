import React, { Component } from 'react';
import logo from './logo.svg';
import Identity from './Identity'
import './App.css';
import { createIdentity, fakeClaims } from './KeyChain'


class App extends Component {
  constructor(props) {
    super(props)
    this.state= {identities: []}
    this.createIdentity = this.createIdentity.bind(this)
  }
  
  async createIdentity () {
    const identity = await createIdentity(fakeClaims())
    this.setState({identities: [identity].concat(this.state.identities)})
  }

  render() {
    console.log(this.state.identities)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">WideID</h1>
          <button onClick={this.createIdentity}>Create Identity</button>
        </header>
        <section>
          {this.state.identities.map(identity => (<Identity identity={identity} key={identity.did} />))}
        </section>
      </div>
    );
  }
}

export default App;
