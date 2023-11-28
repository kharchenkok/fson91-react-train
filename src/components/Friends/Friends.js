import { useState, useMemo } from 'react';
import initalFriends from './InitialFriends';

export default function Friends() {
  const [count, setCount] = useState(0);
  const [friends] = useState(initalFriends);
  const [filter, setFilter] = useState('');

  // const visibleFriends = useMemo(() => {
  //   console.log('Фильтруем друзей ' + Date.now());
  //   return friends.filter(friend => friend.toLowerCase().includes(filter));
  // }, [filter, friends]);

  const visibleFriends = friends.filter((friend) =>
    friend.toLowerCase().includes(filter),
  );

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
      <hr />
      <input onChange={(e) => setFilter(e.target.value)} value={filter} />
      <ul>
        {visibleFriends.map((friend, idx) => (
          <li key={idx}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}
