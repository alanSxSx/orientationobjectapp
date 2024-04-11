'use client'

interface HomeState {
  count: number;
}

import React, { Component } from "react";

class Home extends Component<{}, HomeState> {

  constructor(props: {}) {
    super(props);
    // Inicializando o estado do componente
    this.state = {
      count: 0
    };
  }

  getCount() {
    return this.state.count;
  }

  // Setter para atualizar o valor do contador
  setCount(value: number) {
    this.setState({ count: value });
  }

  // Método para incrementar o contador
  incrementCount() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  // Método para decrementar o contador
  decrementCount() {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  render() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className="flex gap-3">
        <h2>Contador: {this.state.count}</h2>
        <button className="flex justify-center items-center w-28 bg-slate-300 hover:bg-slate-200" onClick={() => this.incrementCount()}>Incrementar</button>
        <button className="flex justify-center items-center w-28 bg-slate-300 hover:bg-slate-200" onClick={() => this.decrementCount()}>Decrementar</button>
      </div>
    </main>
  );
}
}

export default Home
