import { Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';

import Counter from './components/Counter/Counter';
import SkipEffectOnFirstRender from './components/SkipEffectOnFirstRender';
import PokemonView from './views/PokemonView';
import Friends from './components/Friends/Friends';

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
        <Route exact path="/notes" element={<Friends />} />
      </Routes>
    </div>
  );
}
