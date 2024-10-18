import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CheckBoxComponent extends Component {
  @action
  toggleAvailability(event) {
    const isChecked = event.target.checked;
    this.args.onToggle(isChecked);
  }
}
