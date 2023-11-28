import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonForm from '../components/Pokemon/Form.js';
import PokemonInfo from '../components/Pokemon/Info.js';

export default function PokemonView() {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} />
    </>
  );
}

// export default class App extends Component {
//     state = {
//         pokemonName: '',
//     };
//
//     handleFormSubmit = pokemonName => {
//         this.setState({ pokemonName });
//     };
//
//     render() {
//         return (
//             <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
//                 <PokemonForm onSubmit={this.handleFormSubmit} />
//                 <PokemonInfo pokemonName={this.state.pokemonName} />
//                 <ToastContainer autoClose={3000} />
//             </div>
//         );
//     }
// }
