import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  iterate = () =>{
    const pets = this.props.pets
   return pets.map(e => <Pet  onAdoptPet={this.props.onAdoptPet} pet={e}/>)
  }
  render() {
    return <div className="ui cards"> {this.iterate()}</div>
  }
}

export default PetBrowser
