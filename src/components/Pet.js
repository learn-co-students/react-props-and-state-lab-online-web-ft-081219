import React from 'react'

class Pet extends React.Component {

  // handleClick = (event) => {
  //   this.props.onAdoptPet()
  //   event.target.className = "ui disabled button"
  //   event.target.previousSibling.className = "ui primary button"
  // }

  //handle click passed as callback to the onClick event worked
  //but did not pass the tests

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
          </a>
          <div className="meta">
            <span className="date">
              {this.props.pet.type}
            </span>
          </div>
          <div className="description">
            <p>{this.props.pet.age} years old</p>
            <p>{this.props.pet.weight} lbs</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? 
          <button className="ui disabled button">Already Adopted</button> 
          : 
          (<button 
          onClick={() => this.props.onAdoptPet(this.props.pet.id)}
          className='ui primary button'>Adopt Pet
          </button>
          )}
        </div>
      </div>
    )
  }
}

export default Pet
