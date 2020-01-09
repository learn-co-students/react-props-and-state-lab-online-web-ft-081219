import React from 'react'

class Pet extends React.Component {
  adoptButton = (isAdopted, petId) => {
    if (isAdopted) {
      return (
        <button className="ui disabled button">Already adopted</button>
      )
    } else {
      return (
        <button
          className="ui primary button"
          onClick = {() => this.props.onAdoptPet(petId)}
        >
          Adopt pet
        </button>
      )
    }
  }

  render() {
    const pet = this.props.pet;

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {pet.gender==='male' ? '♂' : '♀'}
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adoptButton(pet.isAdopted, pet.id)}
        </div>
      </div>
    )
  }
}

export default Pet
