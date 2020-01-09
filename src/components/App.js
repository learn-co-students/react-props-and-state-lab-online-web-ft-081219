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

  onChangeType = typeName => {
    this.setState({
      filters: {
        type: typeName
      }
    })
  }

  onFindPetsClick = () => {
    let urlAdd = this.state.filters.type === 'all' ? '' : `?type=${this.state.filters.type}`;
    fetch(`/api/pets${urlAdd}`)
    .then(resp => resp.json())
    .then(obj => {
      this.setState({
        pets: obj
      })
    })
  }

  onAdoptPet = petId => {
    this.setState(previousState => {
      return {
        pets: previousState.pets.map(pet => (
          pet.id === petId ? Object.assign(pet, {isAdopted: true}) : pet
        ))
      }
    })
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
                onChangeType = {this.onChangeType}
                onFindPetsClick = {this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets = {this.state.pets}
                onFindPetsClick = {this.onFindPetsClick}
                onAdoptPet = {this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
