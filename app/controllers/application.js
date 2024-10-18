import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @service session;
  @service router;

  @action
  logout() {
    this.session.logout();
    this.router.transitionTo('index'); 
  }
}
