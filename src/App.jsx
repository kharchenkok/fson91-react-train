import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import Home from './pages/HomePage';
import Dogs from './pages/Dogs';
import DogDetails from './pages/DogDetails';
import { SubBreeds } from './components/SubBreeds/SubBreeds';
import { Gallery } from './components/Gallery/Gallery';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="dogs/:dogId" element={<DogDetails />}>
          <Route path="subbreeds" element={<SubBreeds />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  );
};
