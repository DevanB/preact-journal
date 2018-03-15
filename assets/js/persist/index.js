import { sortObjectsByDate, applyFilters } from '../utils';

export default function persist(el, state, cb) {
  if(state.entries){
    state.entries = sortObjectsByDate([].concat(state.entries));
    state.viewEntries = applyFilters(el.state.filterText, state.entries);
  }
  el.setState(state, cb);
  if(state.entries){
    // localStorage.setItem('entries', JSON.stringify(state.entries));
    localStorage.setItem('remainingEntries', JSON.stringify(state.entries.splice(10)));
    localStorage.setItem('bootEntries', JSON.stringify(state.entries));
  }
}
