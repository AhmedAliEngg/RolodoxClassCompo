import { Component } from 'react'
import './App.css'
import CardList from './components/card-list/Card-list';
import SearchBox from './components/search-box/Search-box';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }
    console.log('constructor')
  }
  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      },
        () => {
          console.log(this.state)
        }
      ))
  }

  onSearchChange = (event) => {
    console.log(event.target.value)
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }


  render() {

    console.log("render")

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    return (

      <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>
        {/* 
         {filteredMonsters.map((monster)=>{
          return (
            <div key={monster.id}>
             <h1>{monster.name}</h1>
          </div>
          )
         })
         } */}
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monster"
          className="search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>


    )
  }


}

export default App
