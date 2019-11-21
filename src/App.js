import React, { Component } from 'react';
import List from './List'
import './app.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards:{},
    }
  };

  render(){
    const  { store } = this.props;
    return (
      <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {store.lists.map(list => {
          return (
            <List 
            key={list.id}
            header={list.header} 
            {/* Map through each list's cardIds array. Return the cards whose ids match from the allCards list */}
            cards={list.cardIds.map(id => store.allCards[id])} />
          )
        })}
      </div>
    </main>
    );
  }
  
}

export default App;