import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    this.setState({filters: {type: event.target.value}})
  }
  onFindPetsClick = () => {
    const type = this.state.filters.type
    type === "all" ? fetch('/api/pets').then(resp => resp.json()).then(json =>  this.setState({pets: json} ))  : fetch(`/api/pets?type=${type}`).then(resp => resp.json()).then(json =>  this.setState({pets: json} ))

 
  }

  onAdoptPet = (id) => {
   const pets =  this.state.pets
   let myPet = pets.find(e => {if(e.id === id){return e} })
   myPet.isAdopted = true
   
  }
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType}  onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
