import { combineReducers } from 'redux';

const hits = (state = 0, action) => {
  switch (action.type) {
    case 'COUNT_PAGE_HIT':
      return state + 1;

    default:
      return state;
  }
}

export default combineReducers({ hits });

export const getPageHits = state => state.hits;