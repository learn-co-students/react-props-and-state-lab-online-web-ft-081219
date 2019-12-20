import React from 'react'

class Pet extends React.Component {

  handleAdoptPetClick = (e) => {
    console.log(e.target);
  }
  render() {

    const {gender, name, age, type, weight} = this.props.pet



    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === 'male' ? '♂' : '♀'}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
        {this.props.pet.isAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button
            onClick={() => this.props.onAdoptPet(this.props.pet.id)}
            className="ui primary button">
            Adopt pet
          </button>
        )}
        </div>
      </div>
    )
  }
}

export default Pet
