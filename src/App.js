import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Cardlist } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const {searchField,monsters} = this.state;
    const filteredmonsters= monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monster' handleChange={ev => this.setState({ searchField: ev.target.value })} />
        <Cardlist monsters={filteredmonsters} />
      </div >
    )
  }

}


export default App;
