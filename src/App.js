import { Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';

import Counter from './components/Counter/Counter';
import SkipEffectOnFirstRender from './components/SkipEffectOnFirstRender';
import PokemonView from './views/PokemonView';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
};

export default function App() {
  return (
    <div style={containerStyles}>
      <AppBar />
      <Routes>
        <Route
          exact
          path="/skip-first-render"
          element={<SkipEffectOnFirstRender />}
        />
        <Route exact path="/pokemon" element={<PokemonView />} />
        <Route exact path="/counter" element={<Counter />} />
        {/*<Route exact path="/notes" element={<Friends />} />*/}
      </Routes>
    </div>
  );
}
