import cookie from '../cookie';
import { sortObjectsByDate } from '../utils';

const getInitialState = function() {
  let loggedIn = !!cookie.get('logged_in');
  if(!loggedIn){
    localStorage.removeItem('entries');
    localStorage.removeItem('timestamp');
  }
  let entries = JSON.parse(localStorage.getItem('entries')) || undefined;
  if(entries) entries = sortObjectsByDate(entries);

  let state = {
    scrollPosition: 0,
    view: '/',
    showFilterInput: false,
    filterText: '',
    entryReady: false,
    loggedIn: loggedIn,
    loading: 0,
    syncing: 0,
    entryIndex: -1,
    entry: undefined,
    entries: entries,
    viewEntries: entries,
    toastConfig: undefined
  };

  return state;
};

export default getInitialState;
