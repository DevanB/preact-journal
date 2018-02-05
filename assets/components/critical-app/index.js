import { h, Component } from 'preact';
import Header from '../header';
import Login from '../login';
import Entries from '../entries';
import Entry from '../entry';
import FourOhFour from '../four-oh-four';

let entry = {id: 1234, date: '12-12-1212', text: 'Bogus', isPublic: false};

export default class App extends Component {
  state = {
    entryReady: true,
    loggedIn: true,
    loading: 0,
    syncing: 0,
    entryIndex: 0,
    entry: entry,
    entries: [entry]
  }

  render(props, { loggedIn, loading, entryIndex, entry, entries, entryReady }) {
    return (
      <div id="main-wrapper">
        <div id="view-wrapper">
          <main id="main">
            <Header />
            <Login loggedIn={loggedIn} loading={loading}/>
            <Entries loggedIn={loggedIn} loading={loading} entries={entries}/>
            <Entry loggedIn={loggedIn} loading={loading} entryIndex={entryIndex} entry={entry} entryReady={entryReady}/>
            <FourOhFour/>
          </main>
        </div>
      </div>
    );
  }
}