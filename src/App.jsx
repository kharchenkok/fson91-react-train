import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
// import Home from './pages/HomePage';
// import Dogs from './pages/Dogs';
// import DogDetails from './pages/DogDetails';
// import { SubBreeds } from './components/SubBreeds/SubBreeds';
// import { Gallery } from './components/Gallery/Gallery';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/HomePage'));
const Dogs = lazy(() => import('./pages/Dogs'));
const DogDetails = lazy(() => import('./pages/DogDetails'));

// для іменованих експортів (не дефолтних) треба додати додатковий обєкт
const Gallery = lazy(() =>
  import('./components/Gallery/Gallery').then((module) => ({
    ...module,
    default: module.Gallery,
  })),
);
const SubBreeds = lazy(() =>
  import('./components/SubBreeds/SubBreeds').then((module) => ({
    ...module,
    default: module.SubBreeds,
  })),
);

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
