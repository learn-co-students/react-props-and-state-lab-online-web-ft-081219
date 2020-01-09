import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  listPets = petArray => (
    petArray.map(pet => <Pet 
      pet = {pet}
      key = {pet.id}
      onAdoptPet = {this.props.onAdoptPet}
    />)
  )

  render() {
    return (
      <div className="ui cards">
        {this.listPets(this.props.pets)}
      </div>
    )
  }
}

export default PetBrowser
