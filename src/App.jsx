// import { Component } from 'react'
import './App.css'
import CardList from './components/card-list/Card-list';
import SearchBox from './components/search-box/Search-box';
import { useEffect, useState } from 'react';

const App = () => {

  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  console.log("rendered")

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, [])

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilteredMonsters(newfilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    console.log(event.target.value)
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }



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

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ""
//     }
//     console.log('constructor')
//   }
//   componentDidMount() {
//     console.log('componentDidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(() => {
//         return { monsters: users }
//       },
//         () => {
//           console.log(this.state)
//         }
//       ))
//   }

//   onSearchChange = (event) => {
//     console.log(event.target.value)
//     const searchField = event.target.value.toLocaleLowerCase()
//     this.setState(() => {
//       return { searchField }
//     })
//   }


//   render() {

//     console.log("render")

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })

//     return (




//     )
//   }


// }

export default App
