import { h, Component } from 'preact';
import Icon from '../Icon';
import fire from '../../js/fire';
import copyText from '../../js/copy-text';

export default class EntryPreview extends Component {
  copy = (e) => {
    copyText(this.props.entry.date + ' ' + this.props.entry.text);
  }

  render({ entry }) {
    if(entry.deleted || entry.newEntry && !entry.postPending) return '';
    return (
      <div class="list-item">
        <div class="first-row">
          <a
            class="entry-link"
            href={"/entry/" + entry.id}>
            {entry.date}
          </a>
          <span class="nav-set right dark-fill">
            <Icon icon="copy" key={entry.id + 'copy'} onclick={this.copy}/>
            <Icon icon="delete" key="delete" onclick={fire('linkstate', {key: 'toastConfig', val: {type: 'confirm delete', data: entry.id}})}/>
          </span>
          {/*<span>{ !entry.isPublic ? '🔐' : '🔓' }</span>✖*/}
        </div>

        <div class="second-row">
          <p class="entry-text">
            {/* {entry.text.length > 140 ? entry.text.substr(0, 140) + '...' : entry.text} */}
            {entry.text}
          </p>
        </div>
      </div>
    );
  }
}
