import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useRef } from 'react';

// 1. http://localhost:3000/dogs?dogId=2
// 2. http://localhost:3000/dogs/dog-2
// 3. const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');
// 4. http://localhost:3000/dogs/dog-2/gallery
// 5. backLinkLocationRef не меняется и все еще ведет на http://localhost:3000/dogs?dogId=2

const DogDetails = () => {
  const { dogId } = useParams();

  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/dogs');
  console.log(location);

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return (
    <>
      <Link to={backLinkLocation.current}>Back</Link>
      <h1>DogDetails: {dogId}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quaerat
        illum excepturi odit doloremque, vitae quasi corporis commodi nisi quae
        perspiciatis amet consectetur reprehenderit inventore laborum facilis
        quia mollitia exercitationem eaque rerum dignissimos maiores, quos iure
        blanditiis. Dolorem, nam? Aliquid sequi molestias vel, tenetur maxime
        pariatur? Molestiae libero cum quidem.
      </p>
      <ul>
        <li>
          <Link to="subbreeds">Подподроды</Link>
        </li>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DogDetails;
