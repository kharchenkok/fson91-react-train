import { userInitialState } from './userInitiallState';

export const userReducer = (state = userInitialState, action) => {
  if (action.type === 'createUser') {
    return { ...state, user: [...state.user, action.payload] };
  }
  return state;
};
