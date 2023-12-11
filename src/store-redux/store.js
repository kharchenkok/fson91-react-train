import { createStore } from 'redux';
import { reducer } from './reducer';

export const store = createStore(reducer);

store.dispatch({ type: 'increment', payload: 10 }); //для прикладу

// аналогія з useState
// const [getState, dispatch] = useState("");

// const reducer = (state, action) => {
//   if (action.type === 'increment') {
//     return { ...state, total: state.total + action.payload };
//   }
//   if (action.type === 'createUser') {
//     return { ...state, user: [...state.user, action.payload] };
//   }
//   return state;
// };
//
// export const store = createStore(reducer, { total: 0, user: [], todo: [] });
//
// store.dispatch({ type: 'increment', payload: 10 });
// store.dispatch({ type: 'increment', payload: 2 });
// store.dispatch({ type: 'createUser', payload: 'Alex' });
// store.dispatch({ type: 'createUser', payload: 'Mary' });
//
// console.log(store.getState());
//
// // аналогія з useState
// // const [getState, dispatch] = useState("");
