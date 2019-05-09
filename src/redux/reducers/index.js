import { combineReducers } from 'redux';
import pageHits, * as fromPageHits from './pageHits';

const rootReducer = combineReducers({
  pageHits
});

export default rootReducer;

export const getPageHits = state => fromPageHits.getPageHits(state.pageHits);
