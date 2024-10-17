import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SearchBarComponent extends Component {
    @action
  updateSearch(event) {
    const searchText = event.target.value;
    this.args.onSearch(searchText); 
  }
}
