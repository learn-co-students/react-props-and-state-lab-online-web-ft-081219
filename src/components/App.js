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

  // fetchPetsMy = () => {
  //   return fetch('/api/pets')
  //   .then(resp => resp.json())
  //   .then(pets => this.setState({pets: pets.filter(pet => pet.type === this.state.filters.type)}))
  // }

  fetchPets = () => {
    let url = '/api/pets'

    if(this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }

    fetch(url)
    .then(resp => resp.json())
    .then(pets => this.setState({pets: pets}))
  }

  // async function
  // fetchPets = async () => {
  //   const resp = await fetch('/api/pets')
  //   const pets = await resp.json()
  //   return pets.filter(pet => pet.type === this.state.filters.type)
  // }

  // onAdoptPetMine = (petId) => {
  //   let pet = this.pets.find(pet => pet.id === petId)
  //   pet.setState({isAdopted: true})
  // }

  onAdoptPet = (petId) => {
    let pets = this.state.pets.map(pet => {
      if(pet.id === petId) {
        return {...pet, isAdopted: true}
      }
      return pet
    })
    this.setState({pets: pets})
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
              <Filters 
              onChangeType={this.state.filters.type}
              onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              pets={this.state.pets}
              onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
