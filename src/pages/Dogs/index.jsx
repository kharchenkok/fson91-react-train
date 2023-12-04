import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Dogs = () => {
  const [dogs, setDogs] = useState([
    'dog-1',
    'dog-2',
    'dog-3',
    'dog-4',
    'dog-5',
  ]);

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const userSearch = searchParams.get('search') ?? '';

  const updateSearchString = (event) => {
    const { value } = event.target;
    if (value === '') return setSearchParams({});

    setSearchParams({ search: value });
  };

  // useEffect(() => {
  //   // HTTP запрос, если нужно
  //   !userSearch && setSearchParams();
  // }, [setSearchParams, userSearch]);

  const visibleDogs = userSearch
    ? dogs.filter((dog) => dog.includes(userSearch))
    : dogs;

  return (
    <div>
      <input
        type={'text'}
        value={userSearch}
        onChange={updateSearchString}
        // onChange={(event) => setSearchParams({ search: event.target.value })}
      />
      {/*<button*/}
      {/*  onClick={() => {*/}
      {/*    setSearchParams({ c: 'hello' });*/}
      {/*  }}*/}
      {/*>*/}
      {/*  change search params*/}
      {/*</button>*/}
      {visibleDogs.length === 0 && <p>Ничего не найдено</p>}
      <ol>
        {visibleDogs.map((dog) => {
          return (
            <li key={dog}>
              <Link to={`${dog}`} state={{ from: location }}>
                {dog}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Dogs;
