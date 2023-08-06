import React, {Component} from 'react';

import Pokegame from './Pokegame';
// import Pokedex from './Pokedex'
// import Pokecard from './Pokecard';

class App extends Component {
  render (){
    return<div className='App'>
      <Pokegame/>
      {/* <Pokedex/> */}
      {/* <Pokecard id= {4}
      name= 'Charmander'
      type= 'fire'
      base_experience= {62} /> */}
    </div>;
   

  }
        
 
}

export default App;
